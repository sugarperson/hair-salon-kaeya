import { useImage } from "/src/hooks/useImage";

import "./index.css";

export function BlockImage(
   props: {
      imageFileName: string,
   }
): JSX.Element {
   const image = useImage("block-image", props.imageFileName);
   return (
      <div className="BlockImage">
         {image}
      </div>
   )
}