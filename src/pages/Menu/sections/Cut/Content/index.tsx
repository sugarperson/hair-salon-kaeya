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
               カットのみ
            </div>
            <h3 className="sub-title">
               料金
            </h3>
            <div className="content">
               4,300 円（税込）
            </div>
            <div className="message-box">
               {image}
               <div className="message">
                  お前って本当にせっかちだな。
               </div>
            </div>
         </div>
      </BlockContent>
   )
}