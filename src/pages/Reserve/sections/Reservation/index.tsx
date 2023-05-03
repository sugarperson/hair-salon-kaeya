import { useState } from "react";

import { useServiceDataStateContext } from "../../../../contexts/ServiceDataStateContext";
import { useReserveDataStateContext } from "/src/contexts/ReserveDataStateContext";

import { Header } from "/src/pages/Reserve/sections/Reservation/Header";
import { Month } from "/src/pages/Reserve/sections/Reservation/Month";
import { WeeklyCalendar } from "/src/pages/Reserve/sections/Reservation/WeeklyCalendar";
import { Confirm } from "/src/pages/Reserve/sections/Reservation/Confirm";

import { 
   getShiftedDate, 
   getShiftedWeek, 
   getShiftedMonth, 
   isSameYMD, 
   getFirstDayOfMonth,
   getEndDayOfMonth,
} from "/src/utilities/Date";

export function Reservation(
   props: {}
): JSX.Element {
   const serviceDataStateContext = useServiceDataStateContext();
   if(serviceDataStateContext.state == undefined) return <div>error</div>
   const reserveDataStateContext = useReserveDataStateContext();

   const startDate = serviceDataStateContext.state.scheduleList[0].date;
   const endDate = serviceDataStateContext.state.scheduleList[serviceDataStateContext.state.scheduleList.length - 1].date;
   
   // 1カ月戻すイベントハンドラ
   const downMonth = (event: React.MouseEvent<HTMLDivElement>): void => {
      let currentFirstDayOfWeek = getShiftedDate(reserveDataStateContext.currentDate, -1 * reserveDataStateContext.currentDate.getDay());
      if(!isSameYMD(currentFirstDayOfWeek, startDate) && reserveDataStateContext.currentDate.getDate() == 1){
         // 月初めの場合は前月の月末に強制
         reserveDataStateContext.setCurrentDate(getShiftedDate(reserveDataStateContext.currentDate, -1));
      }else{
         // 月初めでない場合は月初めに強制
         reserveDataStateContext.setCurrentDate(getFirstDayOfMonth(reserveDataStateContext.currentDate));
      }
   };
   
   // 1カ月進めるイベントハンドラ
   const upMonth = (event: React.MouseEvent<HTMLDivElement>): void => {
      let currentEndDayOfMonth = getEndDayOfMonth(reserveDataStateContext.currentDate);
      if(isSameYMD(reserveDataStateContext.currentDate, currentEndDayOfMonth)){
         // 月末の場合は翌月の月初めに強制
         reserveDataStateContext.setCurrentDate(getShiftedDate(reserveDataStateContext.currentDate, 1));
      }else{
         // 月末でない場合は月末に強制
         if(reserveDataStateContext.currentDate.getMonth() < endDate.getMonth()){
            reserveDataStateContext.setCurrentDate(currentEndDayOfMonth);
         }
      }
   }
   
   // 1週間戻すイベントハンドラ
   const downWeek = (event: React.MouseEvent<HTMLDivElement>): void => {
      let currentFirstDayOfWeek = getShiftedDate(reserveDataStateContext.currentDate, -1 * reserveDataStateContext.currentDate.getDay());
      if(!isSameYMD(currentFirstDayOfWeek, startDate) && reserveDataStateContext.currentDate.getDate() == 1){
         // 月初めの場合は前月の月末に強制
         reserveDataStateContext.setCurrentDate(getShiftedDate(reserveDataStateContext.currentDate, -1));
      }else{
         // 月初めでない場合
         let newDate = getShiftedWeek(reserveDataStateContext.currentDate, -1);
         let newFirstDayOfWeek = getShiftedDate(newDate, -1 * newDate.getDay());
         if(startDate < newDate || isSameYMD(newDate, startDate)){
            if(isSameYMD(newFirstDayOfWeek, startDate) || newFirstDayOfWeek.getMonth() < reserveDataStateContext.currentDate.getMonth()){
               // カレンダーの始まりに戻る or 月をまたぐ 場合
               reserveDataStateContext.setCurrentDate(getFirstDayOfMonth(reserveDataStateContext.currentDate)); // 月初めに強制
            }else{
               reserveDataStateContext.setCurrentDate(newDate);
            }
         }
      }
   }
   
   // 1週間進めるイベントハンドラ
   const upWeek = (event: React.MouseEvent<HTMLDivElement>): void => {
      let currentEndDayOfMonth = getEndDayOfMonth(reserveDataStateContext.currentDate);
      let currentEndDayOfWeek = getShiftedDate(reserveDataStateContext.currentDate, 6 - reserveDataStateContext.currentDate.getDay());
      if(isSameYMD(reserveDataStateContext.currentDate, currentEndDayOfMonth)){
         // 月末の場合は翌月の月初めに強制
         reserveDataStateContext.setCurrentDate(getShiftedDate(reserveDataStateContext.currentDate, 1));
      }else{
         // 月末でない場合
         if(reserveDataStateContext.currentDate.getMonth() < endDate.getMonth()){
            let newDate = getShiftedWeek(reserveDataStateContext.currentDate, 1);
            let newEndDayOfWeek = getShiftedDate(newDate, 6 - newDate.getDay());
            if(newDate <= endDate){
               if(isSameYMD(newEndDayOfWeek, endDate) || reserveDataStateContext.currentDate.getMonth() < newEndDayOfWeek.getMonth()){
                  // カレンダーの終わりに進む or 月をまたぐ 場合
                  reserveDataStateContext.setCurrentDate(getEndDayOfMonth(reserveDataStateContext.currentDate)); // 月末に強制 
               }else{
                  reserveDataStateContext.setCurrentDate(newDate);
               }
            }
         }
      }
   }

   return (
      <div className="Reservation">
         <Header/>
         <Month downMonth={downMonth} upMonth={upMonth}/>
         <WeeklyCalendar downWeek={downWeek} upWeek={upWeek}/>
         <Confirm/>
      </div>
   )
}