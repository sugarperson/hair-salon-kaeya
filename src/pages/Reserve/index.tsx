import { useState } from "react";

import { ReserveStateContextProvider } from "/src/contexts/ReserveStateContext";
import { ReserveDataStateContextProvider } from "/src/contexts/ReserveDataStateContext";

import { Header } from "/src/components/sections/Header";
import { NavigationBar } from "/src/components/sections/NavigationBar";
import { Reservation } from "/src/pages/Reserve/sections/Reservation";
import { Footer } from "/src/components/sections/Footer";

import "./index.css";

export function Reserve(
   props: {}
): JSX.Element {
   return (
      <div className="Reserve">
         <Header/>
         <NavigationBar/>
         <div className="contents">
            <ReserveStateContextProvider>
               <ReserveDataStateContextProvider>
                  <Reservation/>
               </ReserveDataStateContextProvider>
            </ReserveStateContextProvider>
         </div>
         <Footer/>
      </div>
   );
}