import "./index.css";

const JapaneseDayList = ["日", "月", "火", "水", "木", "金", "土"];

export function SelectedDate(
   props: {
      label: string,
      value: Date | undefined,
   }
): JSX.Element {
   let displayStr: string = "";
   if(props.value == undefined){
      displayStr = "未選択"
   }else{
      let year: string = props.value == undefined ? "YYYY" : props.value.getFullYear().toString();
      let month: string = props.value == undefined ? "MM" : props.value.getMonth().toString();
      let date: string = props.value == undefined ? "DD" : props.value.getDate().toString();
      let day: string = props.value == undefined ? "DDD" : JapaneseDayList[props.value.getDay()];
      let startHour: string = props.value == undefined ? "hh:mm" : props.value.getHours().toString() + ":00";
      displayStr = `${year}年${Number(month) + 1}月${date}日(${day})　${startHour}～`;
   }
   return (
      <div className="SelectedDate">
         <label className="Label">
            {props.label}：
         </label>
         <div className="Input">
            {displayStr}
         </div>
      </div>
   )
}