import { useEffect } from "react";

import { useGlobalVariableDictContext } from "/src/contexts/GlobalVariableDictContext";
import { usePageStateContext } from "/src/contexts/PageStateContext";
import { useImage } from "/src/hooks/useImage";

import { wait } from "/src/functions/wait";

import "./index.css";

/***************************************************************
 * ロード完了時のアニメーションを表示するためのページコンポーネント。
 * アニメーション完了時にはページをホーム画面に切り替える。
 ***************************************************************/
export function Opening(
   props: {}
): JSX.Element {
   const globalVariableDictContext = useGlobalVariableDictContext();
   const pageStateContext = usePageStateContext();
   
   /*************************************************************
    * アニメーション終了のタイミングにホーム画面に以降する処理を登録
    *************************************************************/
   useEffect(() => {
      wait(1500).then(() => pageStateContext.setState(globalVariableDictContext.HOME));
   }, []);

   return (
      <div className="Opening">
         {useImage("explosion1", "explosion1")}
         {useImage("explosion2", "explosion2")}
      </div>
   )
}