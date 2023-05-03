import { useEffect } from "react";

import { useGlobalVariableDictContext } from "/src/contexts/GlobalVariableDictContext";
import { usePageStateContext } from "/src/contexts/PageStateContext";
import { useServiceDataStateContext } from "/src/contexts/ServiceDataStateContext";
import { useImageDictContext } from "/src/contexts/ImageDictContext";
import { useLoadStateContext } from "/src/contexts/LoadStateContext";

import { wait } from "/src/functions/wait";

import { LoadingImage } from "/src/pages/Loading/LoadingImage";
import { LoadedImage } from "/src/pages/Loading/LoadedImage";

import "./index.css";

export function Loading(
   props: {}
): JSX.Element {
   const globalVariableDictContext = useGlobalVariableDictContext();
   const pageStateContext = usePageStateContext();
   const serviceDataStateContext = useServiceDataStateContext();
   const imageDictContext = useImageDictContext();
   const loadStateContext = useLoadStateContext();
   
   /******************************************** 
    * ロード状態を表すコンポーネントのリストを作成 
    ********************************************/
   let newLoadStatusList = [];
   // ロード済みのデータ数だけLoadedImageコンポーネントを挿入
   for(let i = 0; i < loadStateContext.state; i++){ 
      newLoadStatusList = newLoadStatusList.concat(<LoadedImage key={i}/>);
   }
   // 全ロード数 - ロード済みデータ数 分だけLoadingImageコンポーネントを挿入
   for(let i = loadStateContext.state; i < globalVariableDictContext.MaxLoadCount; i++){ 
      newLoadStatusList = newLoadStatusList.concat(<LoadingImage key={loadStateContext.state+i}/>);
   }

   /****************************************
    * ロード済みのデータ数を更新する処理を登録
    ****************************************/
   useEffect(() => {
      let newLoadCount: number = 0;
      if(serviceDataStateContext.state != undefined) newLoadCount++;
      if(imageDictContext.state["main_visual"] != undefined) newLoadCount++;
      if(imageDictContext.state["concept"] != undefined) newLoadCount++;
      if(imageDictContext.state["explosion1"] != undefined) newLoadCount++;
      loadStateContext.setState(newLoadCount);
      if(newLoadCount >= globalVariableDictContext.MaxLoadCount){
         wait(1000).then(() => {
            pageStateContext.setState(globalVariableDictContext.OPENING);
         });
      }
   }, [serviceDataStateContext.state, imageDictContext.state, loadStateContext.state])
   
   return (
      <div className="Loading">
         <div className="container">
            {newLoadStatusList}
            {/* {loadStatusList} */}
         </div>
      </div>
   )
}