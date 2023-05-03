import { BlockWithContentAndImageOnRight } from "/src/components/sections/BlockWithContentAndImage/BlockWithContentAndImageOnRight";
import { BlockWithContentAndImageOnLeft } from "/src/components/sections/BlockWithContentAndImage/BlockWithContentAndImageOnLeft";
import { BlockContent } from "/src/components/sections/BlockWithContentAndImage/BlockContent";
import { BlockImage } from "/src/components/sections/BlockWithContentAndImage/BlockImage";

import "./index.css";

export function StaffInfo(
   props: {
      staffName: string,
      isImageOnRight: boolean,
      imageFileName: string,
      jobTitle: string,
      briefComment: string,
      value: string,
      favoriteThings: string,
      hobby: string,
   }
): JSX.Element {
   const image = <BlockImage imageFileName={props.imageFileName}/>
   const content = (
      <BlockContent>
         <div className="Content">
            <h3 className="job-title">
               {props.jobTitle}
            </h3>
            <div className="brief-comment">
               {props.briefComment}
            </div>
            <div className="charge">
               指名料：{props.value} モラ（税込）
            </div>
            <ul className="profile">
               <li className="content">
                  好きなもの：{props.favoriteThings}
               </li>
               <li className="content">
                  趣味：{props.hobby}
               </li>
            </ul>
         </div>
      </BlockContent>
   )
   return props.isImageOnRight ?
         <BlockWithContentAndImageOnRight
            blockName={props.staffName}
            blockImage={image}
            blockContent={content}
         />
      :
         <BlockWithContentAndImageOnLeft
            blockName={props.staffName}
            blockImage={image}
            blockContent={content}
         />
}