function getServiceDataList() {
   let ss = SpreadsheetApp.openById(SpreadsheetDict.ManagementSheet.id);

   /* メニュー一覧を取得 */
   let sheet = ss.getSheetByName(SpreadsheetDict.ManagementSheet.sheetNameDict.MenuList);
   let range = sheet.getRange(2, 2, sheet.getLastRow() - 1, sheet.getLastColumn() - 1);
   let menuList = range.getValues().map((menu) => {
      return {
         name: menu[0],
         value: menu[1],
         time: menu[2],
      }
   });

   /* スタッフ一覧を取得 */
   sheet = ss.getSheetByName(SpreadsheetDict.ManagementSheet.sheetNameDict.StaffList);
   range = sheet.getRange(2, 2, sheet.getLastRow() - 1, sheet.getLastColumn() -1);
   let staffList = range.getValues().map((staff) => {
      return {
         name: staff[0],
         value: staff[1],
         email: staff[2],
         calendarId: staff[3],
      }
   });
   
   /* スケジュール一覧を取得 */
   sheet = ss.getSheetByName(SpreadsheetDict.ManagementSheet.sheetNameDict.ScheduleList);
   let scheduleList = sheet.getDataRange().getValues().map((schedule) => {
      return schedule[0];
   });

   return {
      menuList: menuList,
      staffList: staffList,
      scheduleList: scheduleList,
   }
}
