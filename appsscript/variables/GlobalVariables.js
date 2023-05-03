/********************
 *  環境変数の読込み 
 ********************/
const env = PropertiesService.getScriptProperties().getProperties();

// base64形式の画像生成ツール用の環境変数
const MY_DRIVE_FOLDER_ID = env.MY_DRIVE_FOLDER_ID;
const CREATION_TARGET_IMAGE_FILE_ID = env.CREATION_TARGET_IMAGE_FILE_ID;

// アカウント情報の環境変数
const ACCOUNT_OF_HAIR_SALON_KAEYA = env.ACCOUNT_OF_HAIR_SALON_KAEYA;
const ACCOUNT_OF_KAEYA = env.ACCOUNT_OF_KAEYA;
const ACCOUNT_OF_YAOYAO = env.ACCOUNT_OF_YAOYAO;
const ACCOUNT_OF_HUTAO = env.ACCOUNT_OF_HUTAO;
const ACCOUNT_OF_XINGQIU = env.ACCOUNT_OF_XINGQIU;
const ACCOUNT_OF_BENNETT = env.ACCOUNT_OF_BENNETT;

// カレンダー関連の環境変数
const CALENDAR_ID_OF_HAIR_SALON_KAEYA = env.CALENDAR_ID_OF_HAIR_SALON_KAEYA;
const CALENDAR_ID_OF_KAEYA = env.CALENDAR_ID_OF_KAEYA;
const CALENDAR_ID_OF_YAOYAO = env.CALENDAR_ID_OF_YAOYAO;
const CALENDAR_ID_OF_HUTAO = env.CALENDAR_ID_OF_HUTAO;
const CALENDAR_ID_OF_XINGQIU = env.CALENDAR_ID_OF_XINGQIU;
const CALENDAR_ID_OF_BENNETT = env.CALENDAR_ID_OF_BENNETT;

// スプレッドシート関連の環境変数
const MANAGEMENT_SHEET_ID = env.MANAGEMENT_SHEET_ID;


/***********************
 * グローバル変数の定義
 ***********************/
const OpenHour = 10; // 開店時間
const CloseHour = 19; // 閉店時間

const AccountList = [ 
  ACCOUNT_OF_HAIR_SALON_KAEYA, 
  ACCOUNT_OF_KAEYA, 
  ACCOUNT_OF_YAOYAO, 
  ACCOUNT_OF_HUTAO, 
  ACCOUNT_OF_XINGQIU, 
  ACCOUNT_OF_BENNETT, 
];

const calendarIdList = [
  CALENDAR_ID_OF_HAIR_SALON_KAEYA,
  CALENDAR_ID_OF_KAEYA,
  CALENDAR_ID_OF_YAOYAO,
  CALENDAR_ID_OF_HUTAO,
  CALENDAR_ID_OF_XINGQIU,
  CALENDAR_ID_OF_BENNETT,
];

const SpreadsheetDict = {
  ManagementSheet: {
     id: MANAGEMENT_SHEET_ID,
     sheetNameDict: {
        ReservationList: "予約",
        BusinessHours: "開店時間",
        MenuList: "メニュー",
        StaffList: "スタッフ",
        ScheduleList: "スケジュール",
     }
  },
}