import { IntersectionDetector } from "/src/components/widgets/IntersectionDetector";
import { BlockWithContentAndImageOnRight } from "/src/components/sections/BlockWithContentAndImage/BlockWithContentAndImageOnRight";
import { Content } from "/src/pages/Menu/sections/ColorAndTreatment/Content";
import { Image } from "/src/pages/Menu/sections/ColorAndTreatment/Image";

import "./index.css";

export function ColorAndTreatment(
   props: {}
): JSX.Element {
   return (
      <IntersectionDetector
         componentName="ColorAndTreatment"
         observationTargetSuffix="MenuColorAndTreatment"
         intersectingElementClassName="in"
      >
         <BlockWithContentAndImageOnRight
            blockName="Color & Treatment"
            blockContent={<Content/>}
            blockImage={<Image/>}
         />
      </IntersectionDetector>
   );
}