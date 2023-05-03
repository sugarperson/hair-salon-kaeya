import { useEffect, useState } from "react";

import { useGlobalVariableDictContext } from "/src/contexts/GlobalVariableDictContext";
import { Navigator } from "/src/components/sections/NavigationBar/Navigator";

import "./index.css";

export function NavigationBar(
   props: {}
): JSX.Element {
   const globalVariableDictContext = useGlobalVariableDictContext();
   const [className, setClassName] = useState<string>("NavigatorList");

   /******************************************************************
    * スクロール状態に応じてナビゲーションバーの位置を切り替える処理を登録
    ******************************************************************/
   useEffect(() => {
      // ナビゲーションバーが表示されていない場合に画面上部に固定する処理を登録
      new IntersectionObserver((
            entries: IntersectionObserverEntry[], observer: IntersectionObserver
         ): void => {
            if(entries[0].isIntersecting) return;
            setClassName("NavigatorList fixed");
         }, {
            root: null,
            rootMargin: "0px",
            threshold: 0,
         }
      ).observe(document.querySelector(".NavigatorList"));
      
      // ナビゲーションバーが所定の位置にある場合に元の位置に戻す処理を登録
      new IntersectionObserver((
            entries: IntersectionObserverEntry[], observer: IntersectionObserver
         ): void => {
            if(!entries[0].isIntersecting) return;
            setClassName("NavigatorList");
         }, {
            root: null,
            rootMargin: "0px",
            threshold: 1,
         }
      ).observe(document.querySelector(".NavigationBarBorder"));
   }, []);

   return (
      <div className="NaviagationBar">
         <div className="NavigationBarBorder"></div>
         <ul className={className}>
            <Navigator page={globalVariableDictContext.HOME}>
               Home
            </Navigator>
            <Navigator page={globalVariableDictContext.MENU}>
               Menu
            </Navigator>
            <Navigator page={globalVariableDictContext.STAFF}>
               Staff
            </Navigator>
            <Navigator page={globalVariableDictContext.RESERVE}>
               Reserve
            </Navigator>
            <Navigator page={globalVariableDictContext.ACCESS}>
               Access
            </Navigator>
         </ul>
      </div>
   )
}