import { useState, useEffect } from "react";

import { useServiceDataStateContext } from "../../../../../../../contexts/ServiceDataStateContext";
import { useReserveDataStateContext } from "/src/contexts/ReserveDataStateContext";

import "./index.css";

export function ServiceSelection(
   props: {
      currentSchedule: Schedule,
      nextSchedule: Schedule,
      dismissSelector: (event: React.MouseEvent<HTMLTableDataCellElement>) => void,
   }
): JSX.Element {
   const serviceDataStateContext = useServiceDataStateContext();
   const reserveDataStateContext = useReserveDataStateContext();

   const [menuList, setMenuList] = useState<MenuList>(serviceDataStateContext.state.menuList);
   const [staffList, setStaffList] = useState<StaffList>(props.currentSchedule.reservableStaffList);
      
   const selectMenu = (event: React.ChangeEvent<HTMLSelectElement>): void => {
      // @ts-ignore
      reserveDataStateContext.setSelectedMenu(serviceDataStateContext.state.menuList.find(menu => menu.name == event.target.value));
   }

   const selectStaff = (event: React.ChangeEvent<HTMLSelectElement>): void => {
      reserveDataStateContext.setSelectedStaff(props.currentSchedule.reservableStaffList.find(staff => staff.name == event.target.value));
   }

   useEffect(() => { // メニューリストの更新
      if(reserveDataStateContext.selectedStaff == null){
         setMenuList(serviceDataStateContext.state.menuList);
         return;
      }
      let newMenuList = [];
      serviceDataStateContext.state.menuList.map((menu) => {
         if(menu.time > 1){
            if(props.nextSchedule.reservableStaffList.find(staff => staff.name == reserveDataStateContext.selectedStaff.name) != undefined){
               newMenuList.push(menu);
            }
         }else{
            newMenuList.push(menu);
         }
      });
      setMenuList(newMenuList);
   }, [reserveDataStateContext.selectedStaff]);

   useEffect(() => { // スタッフリストの更新
      if(reserveDataStateContext.selectedMenu == null){
         setStaffList(props.currentSchedule.reservableStaffList);
         return;
      }
      let newStaffList = [];
      props.currentSchedule.reservableStaffList.map((staff) => {
         if(reserveDataStateContext.selectedMenu.time > 1){
            if(props.nextSchedule.reservableStaffList.find((s) => s.name == staff.name) != undefined){
               newStaffList.push(staff);
            }
         }else{
            newStaffList.push(staff);
         }
      });
      setStaffList(newStaffList);
   }, [reserveDataStateContext.selectedMenu])

   return (
      <>
         <div className="shield" onClick={props.dismissSelector}>
            shield here
         </div>
         <div className="ServiceSelection">
            <h3 className="title">
               サービス選択
            </h3>
            <div className="DropDownSelector">
               <label className="Label">
                  メニュー
               </label>
               <select className="Selector" name="menu" id="menu_select" onChange={selectMenu}>
                  {
                     reserveDataStateContext.selectedMenu == undefined ? 
                        <option value="" disabled selected style={{display: "none"}}>選択してください</option>
                        :
                        <option value={reserveDataStateContext.selectedMenu.name}>{reserveDataStateContext.selectedMenu.name}（料金：{reserveDataStateContext.selectedMenu.value}モラ）</option>
                  }
                  {
                     menuList.map((menu: Menu): JSX.Element => {
                        if(reserveDataStateContext.selectedMenu == undefined || menu.name != reserveDataStateContext.selectedMenu.name){
                           return <option value={menu.name}>{menu.name}（料金：{menu.value}モラ）</option>;
                        }else{
                           return null;
                        }
                     })
                  }
               </select>
            </div>
            <div className="DropDownSelector">
               <label className="Label">
                  スタッフ
               </label>
               <select className="Selector" name="menu" id="menu_select" onChange={selectStaff}>
                  {
                     reserveDataStateContext.selectedStaff == undefined ?
                     <option value="" disabled selected style={{display: "none"}}>選択してください</option>
                     :
                     <option value={reserveDataStateContext.selectedStaff.name}>{reserveDataStateContext.selectedStaff.name}（指名料：{reserveDataStateContext.selectedStaff.value}）</option>
                  }
                  {
                     staffList.map((staff: Staff): JSX.Element => {
                        if(reserveDataStateContext.selectedStaff == undefined || staff.name != reserveDataStateContext.selectedStaff.name){
                           return <option value={staff.name}>{staff.name}（料金：{staff.value}モラ）</option>;
                        }else{
                           return null;
                        }
                     })
                  }
               </select>
            </div>
         </div>
      </>
   )
}