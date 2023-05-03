import { IntersectionDetector } from "/src/components/widgets/IntersectionDetector";
import { BlockWithContentAndImageOnRight } from "/src/components/sections/BlockWithContentAndImage/BlockWithContentAndImageOnRight";
import { Content } from "/src/pages/Menu/sections/CutAndTreatment/Content";
import { Image } from "/src/pages/Menu/sections/CutAndTreatment/Image";

import "./index.css";

export function CutAndTreatment(
   props: {}
): JSX.Element {
   return (
      <IntersectionDetector
         componentName="CutAndTreatment"
         observationTargetSuffix="MenuCutAndTreatment"
         intersectingElementClassName="in"
      >
         <BlockWithContentAndImageOnRight
            blockName="Cut & Treatment"
            blockContent={<Content/>}
            blockImage={<Image/>}
         />
      </IntersectionDetector>
   );
}