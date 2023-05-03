import { BlockContent } from "/src/components/sections/BlockWithContentAndImage/BlockContent";

import "./index.css";

export function Guide(
   props: {}
): JSX.Element {
   return (
      <BlockContent>
         <div className="Content">
            <h3 className="sub-title">
               アクセス
            </h3>
            <ul className="info">
               <li className="content">
                  店名：Hair Salon Kaeya ドラゴンスパイン店
               </li>
               <li className="content">
                  場所：ドラゴンスパイン中央北部
               </li>
               <li className="content">
                  アクセス：モンド城から6分
               </li>
               <li className="content">
                  メール：XXXXXXX@XXX.XXX
               </li>
               <li className="content">
                  電話：XXX-XXXX-XXXX
               </li>
            </ul>
         </div>
      </BlockContent>
   )
}