import "./index.css";

export function Header(props: {}): JSX.Element {
   return (
      <div className="Header">
         <h1 className="salon-name">
            Hair Salon Gaia
         </h1>
         <h2 className="message">
            ～ この瞬間、お前は永遠を手にする ～
         </h2>
      </div>
   );
}