import { BlockContent } from "/src/components/sections/BlockWithContentAndImage/BlockContent";

import "./index.css";

export function Content(
   props: {}
): JSX.Element {
   return (
      <BlockContent>
         <div className="Text">
            <h2 className="header">
               当店のコンセプト
            </h2>
            <p className="paragraph">
               やあ、店長のガイアだ。
            </p>
            <p className="paragraph">
               この店のコンセプト？
            </p>
            <p className="paragraph">
               それについては今度酒でも飲みながら話そう。
            </p>
         </div>
      </BlockContent>
   )
}