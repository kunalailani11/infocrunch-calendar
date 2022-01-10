import { calendarData, CalendarDataType, weekDays } from "./utilities";
import AddEventModal from "../Modals/AddEventModal";
import './index.css';
import { useState } from "react";

const CustomCalendar = () => {
    const [eventModalVisibility, setEventModalVisibility] = useState(false);
    const [selectedDateForEvent, setSelectedDateForEvent] = useState<CalendarDataType>({
        day: 0,
        event: '',
        id: ''
    });
    const [currentMonthData, setCurrentMonthData] = useState(calendarData);

    const cellClickHandler = (item: CalendarDataType): void => {
        if (!item.isOldDate && !item.isFutureDate) {
            setEventModalVisibility(true);
            setSelectedDateForEvent(item);
        }
    }

    const setEventTitle = (formData: any, item: CalendarDataType): void => {
        let index = -1;
       for (let i = 0; i < currentMonthData.length; i++) {
           const pos = currentMonthData[i].findIndex(el => el.id === item.id);
           if (pos > -1 ) {
               index = i;
               break;
           }
       }
       if (index > -1) {
            const datesArry = currentMonthData[index];
            const dateIndex = datesArry.findIndex(el => el.id === item.id);
            const updatedCurrentMonthData = [...currentMonthData];
            updatedCurrentMonthData[index][dateIndex] = {
                id: item.id,
                day: item.day,
                event: formData.eventTitle
            };                   
            setEventModalVisibility(false);
            setCurrentMonthData(updatedCurrentMonthData);
       }
    }

    return (
        <>
            <div className="week-days">
                {weekDays.map((weekDay, index) => (
                    <div key={index}>{weekDay}</div>
                ))}
            </div>
            <div className="container">
                {currentMonthData.map((week, row) => (
                    <div className="row" key={row}>
                        {week.map((item, index) => {
                            const disabledDate = (item.isOldDate || item.isFutureDate) ? 'disabled-date' : '';
                            return (
                                <div
                                    className={`cell ${disabledDate}`}
                                    role='presentation'
                                    key={item.id}
                                    onClick={() => cellClickHandler(item)}
                                >
                                    <div>
                                        {item.day}
                                    </div>
                                    {item.event && (
                                        <div 
                                        className={`event-title ${disabledDate}`}
                                        title={item.event}
                                        >
                                            {item.event}
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    </div>
                ))}
            </div>
            <AddEventModal 
            visible={eventModalVisibility} 
            selectedItem={selectedDateForEvent} 
            setEventModalVisibility={setEventModalVisibility}
            setEventTitle={setEventTitle}

            />            
        </>
    )
}

export default CustomCalendar;