import React, { ReactNode, useState, useEffect, useContext } from "react";

const ImageDictContext = React.createContext({
   state: {},
   setState: (imageDict: {}) => {},
});

export function ImageDictContextProvider(
   props: {
      children: ReactNode,
   }
): JSX.Element {
   const [imageDict, setImageDict] = useState<{}>({});
   return (
      <ImageDictContext.Provider value={{state: imageDict, setState: setImageDict}}>
         {props.children}
      </ImageDictContext.Provider>
   )
}

export const useImageDictContext = () => useContext(ImageDictContext);