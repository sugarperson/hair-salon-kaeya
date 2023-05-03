import { IntersectionDetector } from "/src/components/widgets/IntersectionDetector";
import { BlockWithContentAndImageOnLeft } from "/src/components/sections/BlockWithContentAndImage/BlockWithContentAndImageOnLeft";
import { Content } from "/src/pages/Home/sections/Concept/Content";
import { Image } from "/src/pages/Home/sections/Concept/Image";

import "./index.css";

export function Concept(
   props: {}
): JSX.Element {
   return (
      <IntersectionDetector
         componentName="Concept"
         observationTargetSuffix="HomeConcept"
         intersectingElementClassName="in"
      >
         <BlockWithContentAndImageOnLeft
            blockName="Concept"
            blockContent={<Content/>}
            blockImage={<Image/>}
         />
      </IntersectionDetector>
   );
}