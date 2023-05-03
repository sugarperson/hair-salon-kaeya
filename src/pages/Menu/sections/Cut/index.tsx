import { IntersectionDetector } from "/src/components/widgets/IntersectionDetector";
import { BlockWithContentAndImageOnLeft } from "/src/components/sections/BlockWithContentAndImage/BlockWithContentAndImageOnLeft";
import { Content } from "/src/pages/Menu/sections/Cut/Content";
import { Image } from "/src/pages/Menu/sections/Cut/Image";

import "./index.css";

export function Cut(
   props: {}
): JSX.Element {
   return (
      <IntersectionDetector
         componentName="Cut"
         observationTargetSuffix="MenuCut"
         intersectingElementClassName="in"
      >
         <BlockWithContentAndImageOnLeft
            blockName="Cut"
            blockContent={<Content/>}
            blockImage={<Image/>}
         />
      </IntersectionDetector>
   );
}