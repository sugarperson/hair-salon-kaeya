import React, { useEffect } from "react";

import "./index.css";

export function Page(
   props: {
      className: string,
      children: React.ReactNode,
   }
): JSX.Element {

   useEffect(() => {
      window.scroll({top: 0, behavior: "smooth"}); // ページ遷移時にビューポートを最上部に戻す
   }, []);

   return (
      <div className={props.className}>
         {props.children}
      </div>
   )
}