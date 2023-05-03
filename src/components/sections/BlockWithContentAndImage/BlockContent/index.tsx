import React from "react";

import "./index.css";

export function BlockContent(
   props: {
      children: React.ReactNode,
   }
): JSX.Element {
   return (
      <div className="BlockContent">
         {props.children}
      </div>
   )
}