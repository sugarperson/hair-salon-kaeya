import { useMediaQuery } from "react-responsive";

import { useGlobalVariableDictContext } from "/src/contexts/GlobalVariableDictContext";

import { Card } from "/src/pages/Home/sections/Menu/Card";

import "./index.css";

type Props = {};
export function Menu(props: Props): JSX.Element {
   const global = useGlobalVariableDictContext();
   const isPC = useMediaQuery({minWidth: global.pcBreakPoint});

   const CardList = [
      <Card service="カット" price={4300} image_id="base64ConceptImage" key="cut"/>,
      <Card service="カット&シャンプー" price={4800} image_id="base64ConceptImage" key="cut&shampoo"/>,
      <Card service="カット&カラー" price={9000} image_id="base64ConceptImage" key="cut&color"/>,
      <Card service="カット&トリートメント" price={7500} image_id="base64ConceptImage" key="cut&treatment"/>,
      <Card service="カラー" price={6500} image_id="base64ConceptImage" key="color"/>,
      <Card service="カラー&トリートメント" price={8500} image_id="base64ConceptImage" key="color&treatment"/>,
   ];
   return (
      <div className="Menu">
         <h2 className="header">Menu</h2>
         {
            isPC ?
               <div className="PCContent">
                  { CardList }
               </div>
               :
               <div className="Content">
                  { CardList }
               </div>
         }
      </div>
   )
}