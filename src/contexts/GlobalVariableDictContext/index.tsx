import React, { useContext } from 'react';

const GlobalVariableDictContext = React.createContext<GlobalVariableDictContext>({
  // ページを表す定数
  LOADING: 0,
  OPENING: 1,
  HOME: 2,
  MENU: 3,
  STAFF: 4,
  RESERVE: 5,
  ACCESS: 6,
  PAGE_NOT_FOUND: 404,
  SERVER_ERROR: 500,

  // ブレイクポイントを表す定数
  tbBreakPoint: 520,
  pcBreakPoint: 960,
  lpcBreakPoint: 1280,

  // データのロード状態を表す定数
  MaxLoadCount: 4,
  NOT_RESERVING: 0,

  // 予約処理の状態を表す定数
  RESERVING: 1,
  SUCCESS_TO_RESERVE: 2,
  FAILURE_TO_RESERVE: 3, 
});

export const useGlobalVariableDictContext = () => useContext(GlobalVariableDictContext);