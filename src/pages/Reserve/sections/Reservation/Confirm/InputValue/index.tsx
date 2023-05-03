import "./index.css";

const JapaneseDayList = ["日", "月", "火", "水", "木", "金", "土"];

export function InputValue(
   props: {
      label: string,
      value: string,
   }
): JSX.Element {
   return (
      <div className="SelectedDate">
         <label className="Label">
            {props.label}：
         </label>
         <div className="Input">
            {props.value}
         </div>
      </div>
   )
}