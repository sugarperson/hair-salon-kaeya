import { CardImage } from "/src/pages/Home/sections/Menu/Card/Image";
import { Text } from "/src/pages/Home/sections/Menu/Card/Text";

import "./index.css";

type Props = { service: string, price: number, image_id: string};
export function Card(props: Props): JSX.Element {
   return (
      <div className="Card">
         <CardImage service={props.service} image_id={props.image_id}/>
         <Text service={props.service} price={props.price}/>
      </div>
   )
}