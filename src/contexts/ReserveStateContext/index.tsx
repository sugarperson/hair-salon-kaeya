import React, { useState, useContext } from "react";

import { useGlobalVariableDictContext } from "/src/contexts/GlobalVariableDictContext";

const ReserveStateContext = React.createContext({
   reserveState: 0,
   setReserveState: (state: number): void => {}
});

export function ReserveStateContextProvider(
   props: {
      children: React.ReactNode,
   }
): JSX.Element {
   const global = useGlobalVariableDictContext();
   const [reserveState, setReserveState] = useState<number>(global.NOT_RESERVING);
   return (
      <ReserveStateContext.Provider value={{
         reserveState: reserveState,
         setReserveState: setReserveState,
      }}>
         {props.children}
      </ReserveStateContext.Provider>
   )
}

export const useReserveStateContext = () => useContext(ReserveStateContext);