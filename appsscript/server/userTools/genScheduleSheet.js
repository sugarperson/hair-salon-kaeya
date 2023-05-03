function genScheduleList(){
  let today = new Date();

  // カレンダーの開始日時を定義
  let startDate = getFirstDateOfMonth(today); // 月の最初の日付に移動
  startDate = getShiftedDate(startDate, -1 * startDate.getDay()); // 週の初めに調整
  startDate.setHours(OpenHour); // 開店時間に調整

  // カレンダーの終了日時を定義
  let endDate = getEndDateOfMonth(getShiftedDate(getEndDateOfMonth(today), 1)); // 翌月の最後の日付に移動
  endDate = getShiftedDate(endDate, 6 - endDate.getDay()); // 週の終わりに調整
  endDate.setHours(CloseHour); // 閉店時間に調整

  // イベントの一覧を取得
  let eventList = [];
  calendarIdList.map((id) => {
    let calendar = CalendarApp.getCalendarById(id);
    eventList = eventList.concat(
      calendar.getEvents(startDate, endDate)
        .filter((event) => { // 開店時間から閉店時間の間の予定だけ取得
          if(event.getStartTime().getDay() == 1 || event.getStartTime().getDay() == 4) return false; // 定休日の予定は除外
          let startTime = event.getStartTime();
          let endTime = event.getEndTime();
          let openTime = new Date(startTime.getFullYear(), startTime.getMonth(), startTime.getDate(), OpenHour);
          let closeTime = new Date(endTime.getFullYear(), endTime.getMonth(), endTime.getDate(), CloseHour);
          return isInTime(startTime, endTime, openTime, closeTime);
        }
      )
    );
  });

  // スタッフ一覧を取得
  let ss = SpreadsheetApp.openById(SpreadsheetDict.ManagementSheet.id);
  let sheet = ss.getSheetByName(SpreadsheetDict.ManagementSheet.sheetNameDict.StaffList);
  let range = sheet.getRange(2, 2, sheet.getLastRow() - 1, sheet.getLastColumn() -1);
  let staffList = range.getValues().map((staff) => {
    return {
        name: staff[0],
        value: staff[1],
        email: staff[2],
        calendarId: staff[3],
    }
  });
  // スケジュール一覧を取得
  let scheduleList = [];
  let currentStartDate = new Date(startDate.getTime());
  while(currentStartDate < endDate){
    let currentEndDate = getShiftedHours(currentStartDate, 1);

    // 基本のスケジュールを生成
    let schedule = {
      date: new Date(currentStartDate.getTime()),
      reservableStaffList: (currentStartDate.getDay() == 1 || currentStartDate.getDay() == 4) ?　
        [] : JSON.parse(JSON.stringify(staffList)), // 定休日の場合は予約可能スタッフを空に、それ以外の場合は一応すべてのスタッフを代入
    }
    // すでに予定が入っているスタッフをreservableStaffListから除外
    eventList.map((event) => {
      if(isInTime(event.getStartTime(), event.getEndTime(), currentStartDate, currentEndDate)){
        if(event.getOriginalCalendarId() == CALENDAR_ID_OF_HAIR_SALON_KAEYA){
          schedule.reservableStaffList = [];
        }else{
          schedule.reservableStaffList = schedule.reservableStaffList.filter((staff) => {
            return staff.calendarId != event.getOriginalCalendarId();
          });
        }
      }
    });
    scheduleList.push([JSON.stringify(schedule)]);
    currentStartDate = getNextDate(currentStartDate);
  }

  // スプレッドシートに書き込む
  sheet = ss.getSheetByName(SpreadsheetDict.ManagementSheet.sheetNameDict.ScheduleList);
  sheet.getDataRange().clearContent();
  range = sheet.getRange(1, 1, scheduleList.length, 1);
  range.setValues(scheduleList);

  return scheduleList;
}

function getNextDate(date){
  let newDate = new Date(date.getTime());
  newDate.setHours(newDate.getHours() + 1);
  if(CloseHour <= newDate.getHours()){
    newDate.setHours(OpenHour);
    newDate.setDate(date.getDate() + 1);
  }
  return newDate;
}

