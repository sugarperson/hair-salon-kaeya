import "./index.css";

export function ServiceState(
   props: {
      schedule: Schedule,
      showSelector: (event: React.MouseEvent<HTMLTableDataCellElement>) => void,
   }
): JSX.Element {
   return (
      <div className="ServiceState" onClick={props.showSelector}>
         {props.schedule.reservableStaffList.length > 0 ? "〇" : "✕"}
      </div>
   )
}