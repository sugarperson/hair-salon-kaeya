import "./index.css";

export function SelectedItem(
   props: {
      label: string,
      value: Menu | Staff | undefined,
   }
): JSX.Element {
   return (
      <div className="SelectedItem">
         <label className="Label">
            {props.label}：
         </label>
         <div className="Input">
            <div className="Value">
               {props.value == undefined ? "未選択" : props.value.name}
            </div>
            <div className="Fee">
               料金： {props.value == undefined ? "---" : props.value.value} モラ
            </div>
         </div>
      </div>
   )
}