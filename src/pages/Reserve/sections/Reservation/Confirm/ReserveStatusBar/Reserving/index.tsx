import { useEffect } from "react";

import { wait } from "/src/functions/wait";

import "./index.css";

export function Reserving(
   props: {}
): JSX.Element {
   return (
      <>
         <div className="mask"></div>
         <div className="Reserving">予約中です。</div>
      </>
   )
}