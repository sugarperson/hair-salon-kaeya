import { BlockContent } from "/src/components/sections/BlockWithContentAndImage/BlockContent";

import "./index.css";

export function Content(
   props: {}
): JSX.Element {
   return (
      <BlockContent>
         <div className="List">
            <h2 className="header">
               お知らせ
            </h2>
            <ul className="list">
               <li className="list-item">
                  <time className="timestamp">2023-03-19</time>
                  ホームページを公開しました !
               </li>
               <li className="list-item">
                  <time className="timestamp">2023-03-13</time>
                  Openフェア開催中 !
               </li>
               <li className="list-item">
                  <time className="timestamp">2023-03-12</time>
                  Hair Salon Gaia ドラゴンスパイン店 Open !
               </li>
            </ul>
         </div>
      </BlockContent>
   )
}