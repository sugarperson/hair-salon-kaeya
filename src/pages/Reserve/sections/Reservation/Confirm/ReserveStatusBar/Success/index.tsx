import { useGlobalVariableDictContext } from "/src/contexts/GlobalVariableDictContext";

import "./index.css";

export function Success(
   props: {
      setReserveState: (state: number) => void,
      calendarLink: string,
   }
): JSX.Element {
   const globalVariableDictContext = useGlobalVariableDictContext();
   function handleClick(event: React.MouseEvent<HTMLButtonElement> | React.MouseEvent<HTMLDivElement>){
      props.setReserveState(globalVariableDictContext.NOT_RESERVING);
   }
   return (
      <>
         <div className="mask" onClick={handleClick}></div>
         <div className="Success">
            ご予約ありがとうございます。<br/>
            <a href={props.calendarLink} target="_blank" rel="noopener noreferrer">
               カレンダーに予定を追加
               <div>（※Googleアカウントのみ）</div>
            </a>
            <button onClick={handleClick}>
               OK
            </button>
         </div>
      </>
   )
}