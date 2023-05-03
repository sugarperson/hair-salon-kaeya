import { IntersectionDetector } from "/src/components/widgets/IntersectionDetector";
import { BlockWithContentAndImageOnRight } from "/src/components/sections/BlockWithContentAndImage/BlockWithContentAndImageOnRight";
import { Content } from "/src/pages/Menu/sections/CutAndShampoo/Content";
import { Image } from "/src/pages/Menu/sections/CutAndShampoo/Image";

import "./index.css";

export function CutAndShampoo(
   props: {}
): JSX.Element {
   return (
      <IntersectionDetector
         componentName="CutAndShampoo"
         observationTargetSuffix="MenuCutAndShampoo"
         intersectingElementClassName="in"
      >
         <BlockWithContentAndImageOnRight
            blockName="Cut & Shampoo"
            blockContent={<Content/>}
            blockImage={<Image/>}
         />
      </IntersectionDetector>
   );
}