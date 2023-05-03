import React, { ReactNode, useState, useEffect, useContext } from "react";
import { useGlobalVariableDictContext } from "../GlobalVariableDictContext";
import { usePageStateContext } from "/src/contexts/PageStateContext";
import { useServiceDataStateContext } from "/src/contexts/ServiceDataStateContext";
import { useImageDictContext } from "/src/contexts/ImageDictContext";

import { isDate } from "/src/utilities/Date";
import { wait } from "/src/functions/wait";

const LoadStateContext = React.createContext({
   state: 0,
   setState: (state: number) => {},
});

export function LoadStateContextProvider(
   props: {
      children: ReactNode,
   }
): JSX.Element {
   const globalVariableDictContext = useGlobalVariableDictContext();
   const pageStateContext = usePageStateContext();
   const serviceDataStateContext = useServiceDataStateContext();
   const imageDictContext = useImageDictContext();
   
   const [loadedDataCount, setLoadedDataCount] = useState<number>(0);
   useEffect(() => {
      /* サイトで使用するデータをロード */
      // ServiceDataのロード
      // @ts-ignore
      google.script.run 
         .withSuccessHandler((serviceData: any): void => {
            let scheduleList: ScheduleList = serviceData.scheduleList.map((schedule: string) => {
               let scheduleObj = JSON.parse(schedule, (key, value) => {
                  if(key == "date"){
                     if(!isNaN(Number(value))) return Number(value);
                     return isDate(value) ? new Date(value) : value;
                  }else{
                     return value;
                  }
               });
               return {
                  date: scheduleObj.date,
                  reservableStaffList: scheduleObj.reservableStaffList,
               }
            })
            serviceDataStateContext.setState({
               menuList: serviceData.menuList,
               staffList: serviceData.staffList,
               scheduleList: scheduleList,
            });
            setLoadedDataCount(0);
         })
         .withFailureHandler((err: Error): void => {
            console.log(err.message);
         })
         .getServiceDataList();
      // SingleUseImageのロード
      // @ts-ignore
      google.script.run
      .withSuccessHandler((imageDict: {}) => {
         wait(0).then(() => {
            Object.entries(imageDict).map(([filename, content]) => {
               imageDictContext.state[filename] = content;
            });
         }).then(() => {setLoadedDataCount(0)})
         // setLoadedDataCount(0);
      })
      .withFailureHandler((err: Error): void => {
         console.log(err.message);
      })
      .getSingleUseImageDict();
      // MultipleUseImageのロード
      // @ts-ignore
      google.script.run
      .withSuccessHandler((imageDict: {}) => {
            wait(100).then(() => {
               Object.entries(imageDict).map(([filename, content]) => {
                  imageDictContext.state[filename] = content;
               });
            }).then(() => {setLoadedDataCount(0)})
            // setLoadedDataCount(0);
         })
         .withFailureHandler((err: Error): void => {
            console.log(err.message);
         })
         .getMultipleUseImageDict();
      // EffectiveUseImageのロード
      // @ts-ignore
      google.script.run
      .withSuccessHandler((imageDict: {}) => {
            wait(200).then(() => {
               Object.entries(imageDict).map(([filename, content]) => {
                  imageDictContext.state[filename] = content;
               });
            }).then(() => {setLoadedDataCount(0)})
            // setLoadedDataCount(0);
         })
         .withFailureHandler((err: Error): void => {
            console.log(err.message);
         })
         .getEffectiveUseImageDict();
   }, []);
   return (
      <LoadStateContext.Provider value={{state: loadedDataCount, setState: setLoadedDataCount}}>
         {props.children}
      </LoadStateContext.Provider>
   )
}

export const useLoadStateContext = () => useContext(LoadStateContext);