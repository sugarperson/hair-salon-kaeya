import { useState } from "react";

import { useGlobalVariableDictContext } from "/src/contexts/GlobalVariableDictContext";
import { useReserveStateContext } from "/src/contexts/ReserveStateContext";
import { useReserveDataStateContext } from "/src/contexts/ReserveDataStateContext";

import { InputItem } from "/src/pages/Reserve/sections/Reservation/Confirm/InputItem";
import { SelectedDate } from "/src/pages/Reserve/sections/Reservation/Confirm/SelectedDate";
import { SelectedItem } from "/src/pages/Reserve/sections/Reservation/Confirm/SelectedItem";
import { ConfirmWindow } from "/src/pages/Reserve/sections/Reservation/Confirm/ConfirmWindow";
import { ReserveStatusBar } from "/src/pages/Reserve/sections/Reservation/Confirm/ReserveStatusBar";

import "./index.css";

export function Confirm(
   props: {}
): JSX.Element {
   const global = useGlobalVariableDictContext();
   const reserveStateContext = useReserveStateContext();
   const reserveDataStateContext = useReserveDataStateContext();
   
   const [name, setName] = useState<string>("");
   const [contact, setContact] = useState<string>("");
   let totalFee: number = (reserveDataStateContext.selectedMenu == undefined ? 0 : reserveDataStateContext.selectedMenu.value) + (reserveDataStateContext.selectedStaff == undefined ? 0 : reserveDataStateContext.selectedStaff.value);

   const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.target.value == undefined) return;
      setName(event.target.value);
   }
   
   const handleChangeContact = (event: React.ChangeEvent<HTMLInputElement>): void => {
      if(event.target.value == undefined) return;
      setContact(event.target.value);
   }

   const [showDialogFlg, setShowDialogFlg] = useState<boolean>(false);
   const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
      setShowDialogFlg(true);
      event.preventDefault();
   }
   
   const handleReserve = () => {
      reserveStateContext.setReserveState(global.RESERVING);

      function handleSuccess(link: string){
         reserveDataStateContext.setCalendarLink(link);
         reserveStateContext.setReserveState(global.SUCCESS_TO_RESERVE);
      }
      function handleFailure(error: Error){
         console.log(error.message);
         reserveDataStateContext.setCalendarLink(error.message);
         reserveStateContext.setReserveState(global.FAILURE_TO_RESERVE);
      }

      /* 本番環境用 */
      // @ts-ignore
      google.script.run
         .withSuccessHandler(handleSuccess)
         .withFailureHandler(handleFailure)
         .reserve(name, contact, JSON.stringify(reserveDataStateContext.selectedDate), reserveDataStateContext.selectedMenu, reserveDataStateContext.selectedStaff);
      setShowDialogFlg(false);
   }

   const cancelReserve = () => {
      setShowDialogFlg(false);
   }


   return (
      <div className="Confirm">
         <h2 className="header">
            予約内容
         </h2>
         <form className="ReserveForm" onSubmit={handleSubmit}>
            <InputItem label="お名前" value={name} handleChange={handleChangeName}/>
            <InputItem label="連絡先" value={contact} handleChange={handleChangeContact}/>
            <div className="spacer"></div>
            <SelectedDate label="予約日時" value={reserveDataStateContext.selectedDate}/>
            <SelectedItem label="メニュー" value={reserveDataStateContext.selectedMenu}/>
            <SelectedItem label="担当者" value={reserveDataStateContext.selectedStaff}/>
            <div className="TotalFee">
               料金： {totalFee == 0 ? "---" : totalFee} モラ
            </div>
            {
               showDialogFlg == false ? 
                  <input type="submit" value="予約確認" className="submit_button"/>
                  :
                  <ConfirmWindow
                     name={name}
                     contact={contact}
                     handleReserve={handleReserve}
                     cancelReserve={cancelReserve}
                  />
            }
            <ReserveStatusBar calendarLink={reserveDataStateContext.calendarLink}/>
         </form>
      </div>
   )
}