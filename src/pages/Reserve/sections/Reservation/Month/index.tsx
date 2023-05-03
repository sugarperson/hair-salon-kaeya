import { useReserveDataStateContext } from "/src/contexts/ReserveDataStateContext";

import "./index.css";

export function Month(
   props: {
      downMonth: (event: React.MouseEvent<HTMLDivElement>) => void,
      upMonth: (event: React.MouseEvent<HTMLDivElement>) => void,
   }
): JSX.Element {
   const reserveDataStateContext = useReserveDataStateContext();
   return (
      <div className="Month">
         <div className="PrevButton material-symbols-outlined" onClick={props.downMonth}>
            arrow_left
         </div>
         <div className="Display">
            {reserveDataStateContext.currentDate.getMonth() + 1} 月
         </div>
         <div className="NextButton material-symbols-outlined" onClick={props.upMonth}>
            arrow_right
         </div>
      </div>
   )
}