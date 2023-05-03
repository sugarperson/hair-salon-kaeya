import { getShiftedMonth } from "/src/utilities/Date";

import "./index.css";

const japaneseDays = ["日", "月", "火", "水", "木", "金", "土"];

export function DayOfWeekHeaderCell(
   props: {
      currentDate: Date,
      date: Date,
   }
): JSX.Element {
   return (
      <th className="DayOfWeekHeaderCell">
         <div className="day-of-week">
            {japaneseDays[props.date.getDay()]}
         </div>
         <div className={
               props.currentDate.getMonth() <= props.date.getMonth()
               && props.date.getMonth() < props.currentDate.getMonth() + 1 ? 
               "date" : "date grayouted"
            }
         >
            {props.date.getDate()}
         </div>
      </th>
   )
}