import { useReserveDataStateContext } from "/src/contexts/ReserveDataStateContext";

import { InputValue } from "/src/pages/Reserve/sections/Reservation/Confirm/InputValue";
import { SelectedDate } from "/src/pages/Reserve/sections/Reservation/Confirm/SelectedDate";
import { SelectedItem } from "/src/pages/Reserve/sections/Reservation/Confirm/SelectedItem";

import "./index.css";

export function ConfirmWindow(
   props: {
      name: string,
      contact: string,
      handleReserve: () => void,
      cancelReserve: () => void,
   }
): JSX.Element {
   const reserveDataStateContext = useReserveDataStateContext();

   let totalFee: number = (reserveDataStateContext.selectedMenu == undefined ? 0 : reserveDataStateContext.selectedMenu.value) + (reserveDataStateContext.selectedStaff == undefined ? 0 : reserveDataStateContext.selectedStaff.value);
   return (
      <div className="ConfirmWindow">
         <div className="film" onClick={props.cancelReserve}></div>
         <div className="ConfirmDialog">
            <h1 className="header">
               予約確認
            </h1>
            <InputValue label="お名前" value={props.name}/>
            <InputValue label="連絡先" value={props.contact}/>
            <SelectedDate label="予約日時" value={reserveDataStateContext.selectedDate}/>
            <SelectedItem label="メニュー" value={reserveDataStateContext.selectedMenu}/>
            <SelectedItem label="担当者" value={reserveDataStateContext.selectedStaff}/>
            <div className="TotalFee">
               料金： {totalFee == 0 ? "---" : totalFee} モラ
            </div>
            <p className="message">以上の内容で予約しますか？</p>
            <div className="confirm">
               <button className="button" onClick={props.handleReserve}>予約する</button>
               <button className="button" onClick={props.cancelReserve}>予約しない</button>
            </div>
         </div>
      </div>
   )
}