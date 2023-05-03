import { IntersectionDetector } from "/src/components/widgets/IntersectionDetector";
import { StaffInfo } from "/src/pages/Staff/modules/StaffInfo";

import "./index.css";

export function Yaoyao(
   props: {}
): JSX.Element {
   return (
      <IntersectionDetector
         componentName="Yaoyao"
         observationTargetSuffix="StaffYaoyao"
         intersectingElementClassName="in"
      >
         <StaffInfo
            staffName="ヨォーヨ"
            isImageOnRight={true}
            imageFileName="staff_yao_yao"
            jobTitle="Senior Stylist"
            briefComment={`こんにちは！ヨォーヨです！
            みんなの髪を素敵にします★
            ぜひお店に来てください。`}
            value="800"
            favoriteThings="お食べくだ菜、水煮魚"
            hobby="読書"
         />
      </IntersectionDetector>
   );
}