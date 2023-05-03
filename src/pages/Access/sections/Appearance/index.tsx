import { IntersectionDetector } from "/src/components/widgets/IntersectionDetector";

import { useImage } from "/src/hooks/useImage";

import "./index.css";

export function Appearance(
   props: {}
): JSX.Element {
   const image = useImage("appearance", "access_appearance");
   return (
      <IntersectionDetector
         componentName="Appearance"
         observationTargetSuffix="AccessAppearance"
         intersectingElementClassName="in"
      >
         <h2 className="header">
            Appearance
         </h2>
         <div className="image-container">
            {image}
         </div>
         <p className="message">
            店でまってるぜ。
         </p>
      </IntersectionDetector>
   )
}