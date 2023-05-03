import React, { useState, useContext } from "react";
import { useGlobalVariableDictContext } from "/src/contexts/GlobalVariableDictContext";

const PageStateContext = React.createContext({
   state: 0,
   setState: (state: number) => {return},
});

export function PageStateContextProvider(
   props: {
      children: React.ReactNode,
   }
): JSX.Element {
   const global = useGlobalVariableDictContext()
   const [page, setPage] = useState<number>(global.LOADING);
   return (
      <PageStateContext.Provider value={{state: page, setState: setPage}}>
         {props.children}
      </PageStateContext.Provider>
   )
}

export const usePageStateContext = () => useContext(PageStateContext);