import { PageStateContextProvider } from "./contexts/PageStateContext";
import { ServiceDataStateContextProvider } from "./contexts/ServiceDataStateContext";
import { ImageDictContextProvider } from "./contexts/ImageDictContext";
import { LoadStateContextProvider } from "./contexts/LoadStateContext";

import { HairSalonKaeya } from "/src/HairSalonKaeya";

import "./App.css";

export default function _App(props: {}): JSX.Element {
   return (
      <PageStateContextProvider>
         <ServiceDataStateContextProvider>
            <ImageDictContextProvider>
               <LoadStateContextProvider>
                  <div className="App">
                     <HairSalonKaeya/>
                  </div>
               </LoadStateContextProvider>
            </ImageDictContextProvider>
         </ServiceDataStateContextProvider>
      </PageStateContextProvider>
   );
}