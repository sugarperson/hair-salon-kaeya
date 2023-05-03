import { IntersectionDetector } from "/src/components/widgets/IntersectionDetector";
import { BlockWithContentAndImageOnLeft } from "/src/components/sections/BlockWithContentAndImage/BlockWithContentAndImageOnLeft";
import { Content } from "/src/pages/Menu/sections/CutAndColor/Content";
import { Image } from "/src/pages/Menu/sections/CutAndColor/Image";

import "./index.css";

export function CutAndColor(
   props: {}
): JSX.Element {
   return (
      <IntersectionDetector
         componentName="CutAndColor"
         observationTargetSuffix="MenuCutAndColor"
         intersectingElementClassName="in"
      >
         <BlockWithContentAndImageOnLeft
            blockName="Cut & Color"
            blockContent={<Content/>}
            blockImage={<Image/>}
         />
      </IntersectionDetector>
   );
}