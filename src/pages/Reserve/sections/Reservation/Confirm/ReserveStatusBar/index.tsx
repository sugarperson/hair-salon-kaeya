import { useReserveStateContext } from "/src/contexts/ReserveStateContext";

import { Reserving } from "./Reserving";
import { Success } from "./Success";
import { Failure } from "./Failure";

import "./index.css";

export function ReserveStatusBar(
   props: {
      calendarLink: string,
   }
): JSX.Element {
   const reserveStateContext = useReserveStateContext();
   const statusList: Array<JSX.Element> = [
      null,
      <Reserving/>,
      <Success setReserveState={reserveStateContext.setReserveState} calendarLink={props.calendarLink}/>,
      <Failure setReserveState={reserveStateContext.setReserveState}/>,
   ]
   return (
      <div className="ReserveStatusBar">
         {statusList[reserveStateContext.reserveState]}
      </div>
   )
}

