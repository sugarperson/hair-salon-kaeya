import { IntersectionDetector } from "/src/components/widgets/IntersectionDetector";
import { StaffInfo } from "/src/pages/Staff/modules/StaffInfo";

import "./index.css";

export function Gaia(
   props: {}
): JSX.Element {
   return (
      <IntersectionDetector
         componentName="Gaia"
         observationTargetSuffix="StaffGaia"
         intersectingElementClassName="in"
      >
         <StaffInfo
            staffName="ガイア・アルベリヒ"
            isImageOnRight={false}
            imageFileName="staff_kaeya"
            jobTitle="Manager"
            briefComment={`やぁ、店長のガイアだ。
            巨竜と戦えるほどの力を持っているとは。
            客人になるか、それとも新たな台風の目になるか。`}
            value="1,000"
            favoriteThings="午後の死（酒）"
            hobby="酒を味わうことだ、な。"
         />
      </IntersectionDetector>
   );
}