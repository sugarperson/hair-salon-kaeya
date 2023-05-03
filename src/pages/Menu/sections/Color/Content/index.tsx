import { BlockContent } from "/src/components/sections/BlockWithContentAndImage/BlockContent";
import { useImage } from "/src/hooks/useImage";

import "./index.css";

export function Content(
   props: {}
): JSX.Element {
   const image = useImage("message-paper", "antique_paper");
   return (
      <BlockContent>
         <div className="Content">
            <h3 className="sub-title">
               内容
            </h3>
            <div className="content">
               カラーのみ
            </div>
            <h3 className="sub-title">
               料金
            </h3>
            <div className="content">
               6,500 円（税込）
            </div>
            <div className="message-box">
               {image}
               <div className="message">
                  風邪ひくなよ。
               </div>
            </div>
         </div>
      </BlockContent>
   )
}