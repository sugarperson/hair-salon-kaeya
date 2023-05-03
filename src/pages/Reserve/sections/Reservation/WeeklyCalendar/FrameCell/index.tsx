import { useState } from "react";

import { useReserveDataStateContext } from "/src/contexts/ReserveDataStateContext";

import { ServiceState } from "/src/pages/Reserve/sections/Reservation/WeeklyCalendar/FrameCell/ServiceState";
import { ServiceSelection } from "/src/pages/Reserve/sections/Reservation/WeeklyCalendar/FrameCell/ServiceSelection";

import "./index.css";

export function FrameCell(
   props: {
      now: Date,
      scheduleList: ScheduleList,
      scheduleIndex: number,
   }
): JSX.Element {
   const reserveDataStateContext = useReserveDataStateContext();

   let schedule: Schedule = props.scheduleList[props.scheduleIndex];
   let nextSchedule: Schedule | undefined = props.scheduleList[props.scheduleIndex + 1];
   let reservable = props.scheduleList[props.scheduleIndex].reservableStaffList.length > 0 && props.now < schedule.date;

   const [isActive, setIsActive] = useState<boolean>(false);

   const showSelector = (event: React.MouseEvent<HTMLTableDataCellElement>): void => {
      reserveDataStateContext.setSelectedDate(props.scheduleList[props.scheduleIndex].date);
      setIsActive(true);
   }
   
   const dismissSelector = (event: React.MouseEvent<HTMLTableDataCellElement>): void => {
      setIsActive(false);
   }

   const serviceState: JSX.Element = (
      <ServiceState schedule={schedule} showSelector={showSelector}/>
   )
   
   const serviceSelector: JSX.Element = isActive ? 
      <ServiceSelection 
         currentSchedule={schedule} 
         nextSchedule={nextSchedule}
         dismissSelector={dismissSelector}
      />
      : 
      null

   return (
      <td className={`FrameCell ${reservable ? "" : "grayouted"}`}>
         {serviceState}
         {reservable ? serviceSelector : null}
      </td>
   )
}