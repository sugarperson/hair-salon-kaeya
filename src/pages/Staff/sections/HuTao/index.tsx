import { IntersectionDetector } from "/src/components/widgets/IntersectionDetector";
import { StaffInfo } from "/src/pages/Staff/modules/StaffInfo";

import "./index.css";

export function HuTao(
   props: {}
): JSX.Element {
   return (
      <IntersectionDetector
         componentName="HuTao"
         observationTargetSuffix="StaffHuTao"
         intersectingElementClassName="in"
      >
         <StaffInfo
            staffName="胡桃"
            isImageOnRight={false}
            imageFileName="staff_hu_tao"
            jobTitle="Senior Stylist"
            briefComment={`胡桃だよー！！
            みんな気軽にお店に遊びに来てね(*^-^*)`}
            value="800"
            favoriteThings="水煮魚、エビ蒸し餃子"
            hobby="詩を作ること"
         />
      </IntersectionDetector>
   );
}