import { useLocalImage } from "/src/hooks/useLocalImage";

import "./index.css";

export function LoadingImage(
   props: {}
): JSX.Element {
   const image = useLocalImage("IceIcon", "ice_icon");
   return (
      <div className="LoadStatus">
         <div className="loading">
            {image}
         </div>
      </div>
   );
}