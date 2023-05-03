import { useMediaQuery } from "react-responsive";

import { useGlobalVariableDictContext } from "/src/contexts/GlobalVariableDictContext";

import "./index.css";

export function GuideWithImageOnLeft(
   props: {
      blockName: string,
      blockContent: JSX.Element,
      blockImage: JSX.Element,
   }
): JSX.Element {
   const global = useGlobalVariableDictContext();
   const isPC = useMediaQuery({minWidth: global.pcBreakPoint});
   return (
      <div className="GuideWithImageOnLeft">
         <h2 className="block-header">
            {props.blockName}
         </h2>
         <div className={isPC ? "PCBlock" : "MBBlock"}>
            {props.blockImage}
            {props.blockContent}
         </div>
      </div>
   )
}