import { IntersectionDetector } from "/src/components/widgets/IntersectionDetector";
import { BlockWithContentAndImageOnLeft } from "/src/components/sections/BlockWithContentAndImage/BlockWithContentAndImageOnLeft";
import { Content } from "/src/pages/Menu/sections/Color/Content";
import { Image } from "/src/pages/Menu/sections/Color/Image";

import "./index.css";

export function Color(
   props: {}
): JSX.Element {
   return (
      <IntersectionDetector
         componentName="Color"
         observationTargetSuffix="MenuColor"
         intersectingElementClassName="in"
      >
         <BlockWithContentAndImageOnLeft
            blockName="Color"
            blockContent={<Content/>}
            blockImage={<Image/>}
         />
      </IntersectionDetector>
   );
}