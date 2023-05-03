/**
 * Webアプリからリクエストを受けて予約を実行する関数。
 * 
 * 関数内では以下の処理を実行します。
 * @todo 予約一覧シートに予約内容を書き込む
 * @todo カレンダーに予約を追加する
 * @todo Googleカレンダーに予定を追加するためのURLを返す
 * 
 * @param {string} name 
 * @param {string} mail 
 * @param {string} selectedDate - ※ 直接Dateオブジェクトを渡すことはできないので文字列に変換して渡しています。
 * @param {{name: string, value: number, time: number}} selectedMenu 
 * @param {{name: string, value: number, mail: string, calendarId: string}} selectedStaff 
 * 
 * @returns {string} Googleカレンダーに予定を追加するためのURL
 */
function reserve(name, mail, selectedDate, selectedMenu, selectedStaff){
  let ss = SpreadsheetApp.openById(SpreadsheetDict.ManagementSheet.id);
  selectedDate = new Date(JSON.parse(selectedDate)); // 日付型は直接渡せないのでアンパック

  /* カレンダーに予約を追加する */
  let event = null;
  let scheduleSheet = ss.getSheetByName(SpreadsheetDict.ManagementSheet.sheetNameDict.ScheduleList);
  let scheduleListRange = scheduleSheet.getDataRange();
  let scheduleList = scheduleListRange.getValues().map((schedule) => {
    return JSON.parse(schedule[0], (key, value) => {
      if(key == "date"){
          if(!isNaN(Number(value))) return Number(value);
          return isDate(value) ? new Date(value) : value;
      }else{
          return value;
      }
    });
  });
  // 予約可能かを判定する
  let isReservable = false;
  for(let i = 0; i < scheduleList.length; i++){
    for(let t = 0; t < selectedMenu.time; t++){
      let startTime = getShiftedSeconds(selectedDate, 3600 * t);
      let endTime = getShiftedSeconds(startTime, 3600);
      if(CloseHour < endTime.getHours()){ // 閉店時間に掛かる場合は予約不可にする
        console.log("is close hour!!")
        isReservable = false;
        break;
      }
      let startLimit = new Date(scheduleList[i + t].date);
      let endLimit = getShiftedSeconds(startLimit, 3600);
      console.log("startTime: ", startTime, ", endTime: ", endTime)
      console.log("startLimit: ", startLimit, ", endLimit: ", endLimit)
      console.log(isInTime(startTime, endTime, startLimit, endLimit))
      isReservable = isInTime(startTime, endTime, startLimit, endLimit) 
        && scheduleList[i + t].reservableStaffList.filter(staff => staff.name == selectedStaff.name).length != 0;
      if(isReservable == false) break;
    }
    if(isReservable){
      // カレンダーにイベントを追加
      let calendar = CalendarApp.getCalendarById(selectedStaff.calendarId);
      let title = selectedMenu.name + " @ Hair Salon Kaeya";
      let startTime = selectedDate;
      let endTime = getShiftedSeconds(startTime, selectedMenu.time * 3600);
      let option = {
        description: `
          ゲスト： ${name} 様
          連絡先： ${mail}
          担当者： ${selectedStaff.name}
          メニュー： ${selectedMenu.name}
          料金： ${selectedMenu.value + selectedStaff.value} モラ
        `
      }
      event = calendar.createEvent(title, startTime, endTime, option);
      // 予約一覧に予約内容を書き込む
      let reserveSheet = ss.getSheetByName(SpreadsheetDict.ManagementSheet.sheetNameDict.ReservationList);
      let newReserve = [
        "",
        "",
        name,
        selectedDate,
        selectedMenu.name,
        selectedStaff.name,
        mail,
      ];
      reserveSheet.appendRow(newReserve);
      // 予約可能なスタッフ一覧から選択したスタッフを削除
      for(let t = 0; t < selectedMenu.time; t++){
        scheduleList[i+t].reservableStaffList = scheduleList[i+t].reservableStaffList.filter((staff) => staff.name != selectedStaff.name);
      }
      let scheduleJsonList = scheduleList.map(schedule => [JSON.stringify(schedule)]);
      scheduleListRange.setValues(scheduleJsonList);
    }
  }
  if(event == null) throw Error(`予約に失敗しました。`);
   
  /* Googleカレンダーに予定を追加するためのURLを生成 */
  let id = event.getId();
  let [eventLocal, eventDomain] = id.split("@");
  let [calendarLocal, calendarDomain] = selectedStaff.calendarId.split("@");
  let time = event.getStartTime();
  let timeString = JSON.stringify(time).split('"').join("").split("-").join("").split(":").join("").split(".").join("").replace("000Z", "Z");
  console.log(eventLocal);
  console.log(timeString);
  console.log(calendarLocal);
  let baseString = `${eventLocal} ${calendarLocal}@g`
  console.log(baseString)
  let eventUrl = "https://calendar.google.com/calendar/event?action=TEMPLATE&tmeid="
    + Utilities.base64Encode(baseString).split("=").join("")
    + "&tmsrc="
    + calendarLocal + "%40" + calendarDomain;
  console.log(eventUrl);

  return eventUrl;
}

function testReserve(){
  reserve(
    "xxx", 
    "sugarfirst", 
    JSON.stringify(new Date(2023, 4, 3, 17, 0, 0)), 
    {
      name: "Cut & Shampoo",
      value: 4800,
      time: 1,
    },
    {
      name: "ガイア",
      value: 1500,
      email: "kaeyaalberich0107494850@gmail.com",
      calendarId: "951faf7c9ac3c88797c69b7c527cd98b6c162127bcb5d68c08c4f7901e96abb6@group.calendar.google.com", // ガイア.仕事
    }
  )
}