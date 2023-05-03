import React, { ReactNode, useState, useEffect, useContext } from "react";

const ServiceDataStateContext = React.createContext<ServiceDataStateContext>({
   state: undefined,
   setState: (serviceData: ServiceData) => {},
});

export function ServiceDataStateContextProvider(
   props: {
      children: ReactNode,
   }
): JSX.Element {
   const [ data, setData ] = useState<ServiceData>(undefined);
   return (
      <ServiceDataStateContext.Provider value={{state: data, setState: setData}}>
         {props.children}
      </ServiceDataStateContext.Provider>
   )
}

export const useServiceDataStateContext = () => useContext(ServiceDataStateContext);