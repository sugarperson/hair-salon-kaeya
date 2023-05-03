import { base64ConceptImage } from "/src/images/concept";
import { Image } from "/src/components/widgets/Image";

import "./index.css";

type Props = {service: string, image_id: string};
export function CardImage(props: Props): JSX.Element {
   const imageDict = {
      base64ConceptImage: base64ConceptImage,
   }
   return (
      <div className="CardImage">
         <Image
            className="menu_image" 
            alt={props.service}
            src={`data:image/jpg;base64,${imageDict[props.image_id]}`} 
         />
      </div>
   )
}