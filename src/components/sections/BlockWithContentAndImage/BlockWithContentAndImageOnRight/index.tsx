import { useMediaQuery } from "react-responsive";

import { useGlobalVariableDictContext } from "/src/contexts/GlobalVariableDictContext";

import "./index.css";

export function BlockWithContentAndImageOnRight(
   props: {
      blockName: string,
      blockContent: JSX.Element,
      blockImage: JSX.Element,
   }
): JSX.Element {
   const global = useGlobalVariableDictContext();
   const isPC = useMediaQuery({minWidth: global.pcBreakPoint});
   return (
      <div className="BlockWithContentAndImageOnRight">
         <h2 className="block-header">
            {props.blockName}
         </h2>
         {
            isPC ?
               <div className="PCBlock">
                  {props.blockContent}
                  {props.blockImage}
               </div>
               :
               <div className="MBBlock">
                  {props.blockImage}
                  {props.blockContent}
               </div>
         }
      </div>
   )
}