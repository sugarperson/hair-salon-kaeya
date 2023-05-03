import React, { useState, useContext } from "react";

import { getShiftedDate } from "/src/utilities/Date";

const ReserveDataStateContext = React.createContext({
   currentDate: undefined,
   setCurrentDate: (date: Date): void => {},
   selectedDate: undefined,
   setSelectedDate: (date: Date): void => {},
   selectedMenu: undefined,
   setSelectedMenu: (menu: Menu): void => {},
   selectedStaff: undefined,
   setSelectedStaff: (staff: Staff): void => {},
   calendarLink: "",
   setCalendarLink: (link: string): void => {},
});

export function ReserveDataStateContextProvider(
   props: {
      children: React.ReactNode,
   }
): JSX.Element {
   let now = new Date();
   if(18 < now.getHours()){ // 18時以降に開いた場合は次の日のカレンダーを表示
      now = getShiftedDate(now, 1);
      now.setHours(0);
   }
   const [currentDate, setCurrentDate] = useState<Date>(now);
   const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
   const [selectedMenu, setSelectedMenu] = useState<Menu | undefined>(undefined);
   const [selectedStaff, setSelectedStaff] = useState<Staff | undefined>(undefined);
   const [calendarLink, setCalendarLink] = useState<string>("");
   return (
      <ReserveDataStateContext.Provider value={{
         currentDate: currentDate,
         setCurrentDate: setCurrentDate,
         selectedDate: selectedDate,
         setSelectedDate: setSelectedDate,
         selectedMenu: selectedMenu,
         setSelectedMenu: setSelectedMenu,
         selectedStaff: selectedStaff,
         setSelectedStaff: setSelectedStaff,
         calendarLink: calendarLink,
         setCalendarLink: setCalendarLink,
      }}>
         {props.children}
      </ReserveDataStateContext.Provider>
   );
}

export const useReserveDataStateContext = () => useContext(ReserveDataStateContext);