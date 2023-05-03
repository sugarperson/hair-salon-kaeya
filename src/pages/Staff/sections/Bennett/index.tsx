import { IntersectionDetector } from "/src/components/widgets/IntersectionDetector";
import { StaffInfo } from "/src/pages/Staff/modules/StaffInfo";

import "./index.css";

export function Bennett(
   props: {}
): JSX.Element {
   return (
      <IntersectionDetector
         componentName="Bennett"
         observationTargetSuffix="StaffBennett"
         intersectingElementClassName="in"
      >
         <StaffInfo
            staffName="ベネット"
            isImageOnRight={false}
            imageFileName="staff_bennett"
            jobTitle="Junior Stylist"
            briefComment={`新人のベネットです！
            一生懸命頑張ります👍`}
            value="500"
            favoriteThings="肉（ステーキ、焼き鳥 など）"
            hobby="冒険だ冒険！"
         />
      </IntersectionDetector>
   );
}