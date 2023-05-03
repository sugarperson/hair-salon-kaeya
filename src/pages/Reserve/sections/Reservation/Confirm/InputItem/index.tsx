import "./index.css";

export function InputItem(
   props: {
      label: string,
      value: string,
      handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void,
   }
): JSX.Element {
   return (
      <div className="InputItem">
         <label className="Label">
            {props.label}：
         </label>
         <div className="Input">
            <input name={props.label} type="text" className="input_box" value={props.value} onChange={props.handleChange}/>
         </div>
      </div>
   )
}