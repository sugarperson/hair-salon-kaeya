import { useImage } from "/src/hooks/useImage";

import "./index.css";

type Props = {};
export function MainVisual(props: Props): JSX.Element {
   const image = useImage("main_visual", "main_visual");
   return (
      <div className="MainVisual">
         {image}
      </div>
   )
}