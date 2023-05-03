import { BlockContent } from "/src/components/sections/BlockWithContentAndImage/BlockContent";

import "./index.css";

export function Content(
   props: {}
): JSX.Element {
   return (
      <BlockContent>
         <div className="Content">
            <h3 className="job-title">
               Senior Stylist
            </h3>
            <div className="paragraph">
               こんにちは！ヨォーヨです！
            </div>
            <div className="paragraph">
               みんなの髪を素敵にします★
            </div>
            <div className="paragraph">
               ぜひお店に来てください。
            </div>
            <h3 className="sub-title">
               指名料
            </h3>
            <div className="paragraph">
               800 円（税込）
            </div>
         </div>
      </BlockContent>
   )
}