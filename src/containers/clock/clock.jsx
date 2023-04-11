import { useState } from "react";
import DateComponent from "../../components/clock-hook/date/date";
import TimeComponent from "../../components/clock-hook/time/time";



const Clock = () => {

    const [currentComponent, setCurrentComponent] = useState('time');

    return (
        <>
            <button onClick={() => setCurrentComponent('time')}>Heure</button>
            <button onClick={() => setCurrentComponent('date')}>Date</button>
           
            {currentComponent === 'time' && <TimeComponent />}
            {currentComponent === 'date' &&  <DateComponent />}
        </>
    )
}

export default Clock;