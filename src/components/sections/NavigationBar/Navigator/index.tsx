import { usePageStateContext } from "../../../../contexts/PageStateContext";

import "./index.css";

export function Navigator(
   props: {
      page: number,
      children: React.ReactNode,
   }
): JSX.Element {
   const pageStateContext: PageStateContext = usePageStateContext();
   return (
      <li className="Navigator">
         <a 
            className="navigator" 
            tabIndex={-1} 
            onClick={(event: React.MouseEvent<HTMLAnchorElement>): void => {
               pageStateContext.setState(props.page);
            }}
         >
            {props.children}
         </a>
      </li>
   )
}