import "./index.css";

export function Image(
   props: {
      className: string,
      alt: string,
      src: string,
   }
): JSX.Element {
   return (
      <img 
         className={`Image ${props.className}`} 
         alt={props.alt}
         src={props.src} 
      />
   )
}