import { useImageDictContext } from "../contexts/ImageDictContext";

import { Image } from "/src/components/widgets/Image";

export function useImage(
   className: string,
   imageFileName: string,
): JSX.Element {
   const imageDict = useImageDictContext();
   return (
      <Image
         className={className}
         alt={`画像 - ${imageFileName}`}
         src={`data:image/jpg;base64,${imageDict.state[imageFileName]}`}
      />
   )
}