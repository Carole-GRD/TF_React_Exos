import { useEffect } from "react";
import { useState } from "react";


const TimeComponent = () => {

    const [value, setValue] = useState('');
    const [hour, setHour] = useState('');
    const [minute, setMinute] = useState('');
    const [second, setSecond] = useState('');

    useEffect(() => {
        const interval = setInterval(() => {
            const currentValue = 
            new Date().getHours() * 3600 + 
            new Date().getMinutes() * 60 + 
            new Date().getSeconds();
            setValue(currentValue);
        
            const currentHour = Math.floor(currentValue / 3600);
            setHour(currentHour);

            const currentMinute = Math.floor((currentValue % 3600) / 60);
            setMinute(currentMinute);

            const currentSecond = Math.floor(currentValue % 3600 % 60);
            setSecond(currentSecond);
        }, 1000);

        return () => clearInterval(interval);
    }, [])


    // ON INIT
    useEffect(() => {
        // console.log('ON INIT');
        const interval = setInterval(() => {
            setValue((prevValue) => prevValue + 0.2);
        }, 200);
        
        // ON DESTROY
        return () => {
            // console.log('ON DESTROY');
            clearInterval(interval);
        }
    }, []);

    
    const time = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`;

    return (
        <>
            <p>{time !== '0:0:0' && time}</p>
            {/* <p>{time}</p> */}
        </>
    )
}

export default TimeComponent;