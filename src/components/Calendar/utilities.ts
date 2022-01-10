export type CalendarDataType = {
    day: number;
    event: string;
    id: string;
    isOldDate?: boolean;
    isFutureDate?: boolean;
}

const oldEvents = ['Meeting with xyz', 'discussion regarding project with abc'];

const decStartDate = 26;
const janStartDate = 1;

const decMonth: Array<CalendarDataType> = Array(6).fill(undefined).map((el, index) => ({
    isOldDate: true,
    id: `dec-${index}`,
    day: decStartDate + index,
    event: index % 2 === 0 ? oldEvents[Math.floor(Math.random() * oldEvents.length)]: ''
}))

const janMonth: Array<CalendarDataType> = Array(31).fill(undefined).map((el, index) => ({    
    day: janStartDate + index,
    event: '',
    id: `jan-${index}`,
}));

const febMonth: Array<CalendarDataType> = Array(5).fill(undefined).map((el, index) => ({
    isFutureDate: true,
    day: janStartDate + index,
    id: `feb-${index}`,
    event: ''
}));

const currentMonth: Array<CalendarDataType> = [...decMonth, ...janMonth, ...febMonth];

const calendarData: Array<Array<CalendarDataType>> = [];

while(currentMonth.length) {
    calendarData.push(currentMonth.splice(0, 7));
}

const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export { calendarData, weekDays };