import { useServiceDataStateContext } from "../../../../../contexts/ServiceDataStateContext";
import { useReserveDataStateContext } from "/src/contexts/ReserveDataStateContext";

import { TimeHeaderCell } from "/src/pages/Reserve/sections/Reservation/WeeklyCalendar/TimeHeaderCell";
import { TimeCell } from "/src/pages/Reserve/sections/Reservation/WeeklyCalendar/TimeCell";
import { DayOfWeekHeaderCell } from "/src/pages/Reserve/sections/Reservation/WeeklyCalendar/DayOfWeekHeaderCell";
import { FrameCell } from "/src/pages/Reserve/sections/Reservation/WeeklyCalendar/FrameCell";

import  { getShiftedDate, getShiftedWeek, getShiftedMonth } from "/src/utilities/Date";

import "./index.css";

const timeSlotList = [
   "10:00～11:00",
   "11:00～12:00",
   "12:00～13:00",
   "13:00～14:00",
   "14:00～15:00",
   "15:00～16:00",
   "16:00～17:00",
   "17:00～18:00",
   "18:00～19:00",
];

export function WeeklyCalendar(
   props: {
      downWeek: (event: React.MouseEvent<HTMLDivElement>) => void,
      upWeek: (event: React.MouseEvent<HTMLDivElement>) => void,
   }
): JSX.Element {
   const serviceDataStateContext = useServiceDataStateContext();
   if(serviceDataStateContext.state == undefined) return <div>error</div>
   const reserveDataStateContext = useReserveDataStateContext();
   
   let now = new Date();
   let calendarStartDate = getShiftedDate(reserveDataStateContext.currentDate, -1 * reserveDataStateContext.currentDate.getDay());

   const headerRow = (
      <tr>
         <TimeHeaderCell/>
         {[...Array(7)].map((_, i) => {
            let newDate = getShiftedDate(calendarStartDate, i);
            return <DayOfWeekHeaderCell currentDate={reserveDataStateContext.currentDate} date={newDate} key={newDate.getDate()}/>
         })}
      </tr>
   );

   const startDateIndex = serviceDataStateContext.state.scheduleList.findIndex((schedule: Schedule) => {
      return schedule.date.getFullYear() == calendarStartDate.getFullYear() 
         &&  schedule.date.getMonth() == calendarStartDate.getMonth() 
         && schedule.date.getDate() == calendarStartDate.getDate()
   });
   const trList = (
      timeSlotList.map((timeSlot, timeSlotIndex) => {
         return (
            <tr key={"time slot: " + timeSlot}>
               <TimeCell time={timeSlot}/>
               {[...Array(7)].map((_, dayIndex) => {
                  return (
                     <FrameCell 
                        now={now}
                        scheduleList={serviceDataStateContext.state.scheduleList}
                        scheduleIndex={startDateIndex + timeSlotList.length * dayIndex + timeSlotIndex}
                        key={"time slot: " + timeSlot + ", day num: " + dayIndex}
                     />
                  );
               })}
            </tr>
         )
      })
   );

   return (
      <div className="WeeklyCalendar">
         <div className="PrevButton">
            <div className="material-symbols-outlined" onClick={props.downWeek}>
               arrow_left
            </div>
         </div>
         <div className="NextButton">
            <span className="material-symbols-outlined" onClick={props.upWeek}>
               arrow_right
            </span>
         </div>
         <table className="DayListOfWeek">
            <thead>
               {headerRow}
            </thead>
            <tbody>
               {trList}
            </tbody>
         </table>
      </div>
   )
}