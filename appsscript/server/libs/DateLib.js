function getShiftedMonth(date, delta){
  let newDate = new Date(date.getTime());
  for(let i = 0; i < delta; i++){
    newDate = getEndDateOfMonth(newDate);
    newDate = getShiftedDate(newDate, 1);
  }
  return newDate;
}

function getShiftedWeek(date, delta){
  let newDate = new Date(date.getTime());
  newDate.setDate(newDate.getDate() + delta * 7);
  return newDate;
}

function getShiftedDate(date, delta){
  let newDate = new Date(date.getTime());
  newDate.setDate(newDate.getDate() + delta);
  return newDate;
}

function getShiftedHours(date, delta){
  let newDate = new Date(date.getTime());
  newDate.setHours(newDate.getHours() + delta);
  return newDate;
}

function getShiftedMinutes(date, delta){
  let newDate = new Date(date.getTime());
  newDate.setMinutes(newDate.getMinutes() + delta);
  return newDate;
}

function getShiftedSeconds(date, delta){
  let newDate = new Date(date.getTime());
  newDate.setSeconds(newDate.getSeconds() + delta);
  return newDate;
}

function getFirstDateOfMonth(date){
  let newDate = new Date(date.getFullYear(), date.getMonth(), 1);
  return newDate;
}

function getEndDateOfMonth(date){
  let newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  return getShiftedDate(newDate, -1);
}

function isInTime(startDate, endDate, frameStartDate, frameEndDate){
  return (frameStartDate < endDate && endDate <= frameEndDate)
    || (frameStartDate <= startDate && startDate < frameEndDate)
    || (startDate <= frameStartDate && frameEndDate <= endDate );
}

const isDate = (v) => !isNaN(new Date(v).getTime());