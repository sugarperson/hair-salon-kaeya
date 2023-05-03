import { IntersectionDetector } from "/src/components/widgets/IntersectionDetector";
import { StaffInfo } from "/src/pages/Staff/modules/StaffInfo";

import "./index.css";

export function Xingqiu(
   props: {}
): JSX.Element {
   return (
      <IntersectionDetector
         componentName="Xingqiu"
         observationTargetSuffix="StaffXingqiu"
         intersectingElementClassName="in"
      >
         <StaffInfo
            staffName="行秋"
            isImageOnRight={true}
            imageFileName="staff_xing_qiu"
            jobTitle="Stylist"
            briefComment={`行秋です！
            僕の生足を見に来てね！`}
            value="800"
            favoriteThings="菓子、月菜海鮮"
            hobby="読書（特に武侠小説！）"
         />
      </IntersectionDetector>
   );
}