/// <reference types="vite/client" />

/************************
 * グローバル変数の型定義
 ************************/
interface GlobalVariableDictContext {
   // ページの状態を表す定数
   readonly LOADING: number;
   readonly OPENING: number;
   readonly HOME: number;
   readonly MENU: number;
   readonly STAFF: number;
   readonly RESERVE: number;
   readonly ACCESS: number;
   readonly PAGE_NOT_FOUND: number;
   readonly SERVER_ERROR: number;

   // ブレイクポイントを表す定数
   readonly tbBreakPoint: number;
   readonly pcBreakPoint: number;
   readonly lpcBreakPoint: number;

   // データのロード状態を表す定数
   readonly MaxLoadCount: number;
   readonly NOT_RESERVING: number,

   // 予約処理の状態を表す定数
   readonly RESERVING: number,
   readonly SUCCESS_TO_RESERVE: number,
   readonly FAILURE_TO_RESERVE: number, 
}

/******************************************
 * 表示するページの番号を保持するステートの型
 ******************************************/
interface PageStateContext {
   state: number;
   setState: (page: number) => void;
}

/**************************************************************
 * サービスデータを保持するデータの型
 * （サービスデータ：メニュー一覧 + スタッフ一覧 + スケジュール一覧）
 **************************************************************/
interface ServiceDataStateContext {
   state: ServiceData;
   setState: (serviceData: ServiceData) => void;
}

type ServiceData = {
   menuList: MenuList;
   staffList: StaffList;
   scheduleList: ScheduleList;
} | undefined

type MenuList = Array<
   {
      name: string,
      value: number,
      time: number,
   }
> | []

type Menu = {
   name: string,
   value: number,
   time: number,
}

type StaffList = Array<
   {
      name: string,
      value: number,
      email: string,
      calendarId: string,
   }
> | []

type Staff = {
   name: string,
   value: number,
   email: string,
   calendarId: string,
}

type ScheduleList = Array<
   {
      date: Date,
      reservableStaffList: Array<
         {
            name: string,
            value: number,
            email: string,
            calendarId: string,
         }
      >,
   }
>

type Schedule = {
   date: Date,
   reservableStaffList: Array<
      {
         name: string,
         value: number,
         email: string,
         calendarId: string,
      }
   >,
}

/***********************************
 * 画像のステートを保持するデータの型
 ***********************************/
interface ImageDictContext {
   state?: ImageDict;
   setState: (imageData: ImageDict) => void;
}

type ImageDict = {
   ice_icon: string,
   main_visual: string,
   concept: string,
   antique_paper: string,
   staff_kaeya: string,
   staff_yao_yao: string,
   staff_hu_tao: string,
   staff_xing_qiu: string,
   staff_bennett: string,
   access_map: string,
   access_appearance: string,
} | undefined
