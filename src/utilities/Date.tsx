export function getShiftedMonth(date: Date, step: number): Date {
   let newDate = new Date(date.getTime());
   newDate.setMonth(newDate.getMonth() + step);
   return newDate;
}

export function getShiftedWeek(date: Date, step: number): Date {
   let newDate = new Date(date.getTime());
   newDate.setDate(newDate.getDate() + step * 7);
   return newDate;
}

export function getShiftedDate(date: Date, step: number): Date {
   let newDate = new Date(date.getTime());
   newDate.setDate(newDate.getDate() + step);
   return newDate;
}

export function isSameYMD(date1: Date, date2: Date): boolean {
   return date1.getFullYear() == date2.getFullYear() && date1.getMonth() == date2.getMonth() && date1.getDate() == date2.getDate();
}

export function getFirstDayOfMonth(date: Date): Date {
   let newDate = new Date(date.getTime());
   newDate.setDate(1);
   return newDate;
}

export function getEndDayOfMonth(date: Date): Date {
   let newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1, date.getHours());
   newDate = getShiftedDate(getFirstDayOfMonth(newDate), -1);
   return newDate;
}

export const isDate = (v: string) => !isNaN(new Date(v).getTime());