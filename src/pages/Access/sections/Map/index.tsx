import { IntersectionDetector } from "/src/components/widgets/IntersectionDetector";
import { GuideWithImageOnLeft } from "/src/pages/Access/sections/GuideWithImageOnLeft";

import { Guide } from "/src/pages/Access/sections/Map/Guide";
import { Image } from "/src/pages/Access/sections/Map/Image";

import "./index.css";

export function Map(
   props: {}
): JSX.Element {
   return (
      <IntersectionDetector
         componentName="Map"
         observationTargetSuffix="AccessMap"
         intersectingElementClassName="in"
      >
         <GuideWithImageOnLeft
            blockName="Map"
            blockImage={<Image/>}
            blockContent={<Guide/>}
         />
      </IntersectionDetector>
   )
}