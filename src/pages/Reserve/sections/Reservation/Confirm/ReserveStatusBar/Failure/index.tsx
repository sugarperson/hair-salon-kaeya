import { useEffect } from "react";

import { useGlobalVariableDictContext } from "/src/contexts/GlobalVariableDictContext";

import { wait } from "/src/functions/wait";

import "./index.css";

export function Failure(
   props: {
      setReserveState: (state: number) => void,
   }
): JSX.Element {
   const globalVariableDictContext = useGlobalVariableDictContext();
   useEffect(() => {
      wait(3000).then(() => {
         props.setReserveState(globalVariableDictContext.NOT_RESERVING);
      });
   }, []);
   return (
      <span className="Failure">
         予約できませんでした。<br/>
         ほかの日時やスタッフを指定してください。
      </span>
   )
}