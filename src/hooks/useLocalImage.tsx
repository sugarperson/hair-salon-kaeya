import { Image } from "/src/components/widgets/Image";
import { base64Ice } from "/src/images/ice";

const imageDict = {
   ice_icon: base64Ice,
}

export function useLocalImage(
   className: string,
   imageFileName: string,
): JSX.Element {
   return (
      <Image
         className={className}
         alt={imageFileName} 
         src={`data:image/jpg;base64,${imageDict[imageFileName]}`}
      />
   )
}