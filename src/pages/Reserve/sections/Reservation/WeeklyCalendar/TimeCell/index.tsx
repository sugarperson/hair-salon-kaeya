import "./index.css";

export function TimeCell(
   props: {
      time: string,
   }
): JSX.Element {
   return <td className="TimeCell">{props.time}</td>
}