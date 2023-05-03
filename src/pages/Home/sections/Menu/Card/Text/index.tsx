import "./index.css";

type Props = { service: string, price: number };
export function Text(props: Props): JSX.Element {
   return (
      <div className="Text">
         <div className="service">
            {props.service}
         </div>
         <div className="price">
            {props.price}
         </div>
      </div>
   )
}