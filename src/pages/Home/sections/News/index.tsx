import { IntersectionDetector } from "/src/components/widgets/IntersectionDetector";
import { BlockWithContentAndImageOnRight } from "/src/components/sections/BlockWithContentAndImage/BlockWithContentAndImageOnRight";
import { Content } from "/src/pages/Home/sections/News/Content";
import { Image } from "/src/pages/Home/sections/News/Image";

import "./index.css";

export function News(
   props: {}
): JSX.Element {
   return (
      <IntersectionDetector
         componentName="News"
         observationTargetSuffix="HomeNews"
         intersectingElementClassName="in"
      >
         <BlockWithContentAndImageOnRight
            blockName="News"
            blockContent={<Content/>}
            blockImage={<Image/>}
         />
      </IntersectionDetector>
   )
}