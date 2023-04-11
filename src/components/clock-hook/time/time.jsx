// import { useEffect } from "react";
// import { useState } from "react";


// const TimeComponent = () => {

//     const [value, setValue] = useState(new Date());
//     const [hour, setHour] = useState(0);
//     const [minute, setMinute] = useState(0);
//     const [second, setSecond] = useState(0);

//     useEffect(() => {
//         const interval = setInterval(() => {
//             const currentValue = 
//             new Date().getHours() * 3600 + 
//             new Date().getMinutes() * 60 + 
//             new Date().getSeconds();
//             setValue(currentValue);
        
//             const currentHour = Math.floor(currentValue / 3600);
//             setHour(currentHour);

//             const currentMinute = Math.floor((currentValue % 3600) / 60);
//             setMinute(currentMinute);

//             const currentSecond = Math.floor(currentValue % 3600 % 60);
//             setSecond(currentSecond);
//         }, 200);

//         return () => clearInterval(interval);
//     }, [])


//     // ON INIT
//     // useEffect(() => {
//     //     // console.log('ON INIT');
//     //     const interval = setInterval(() => {
//     //         setValue((prevValue) => prevValue + 0.2);
//     //     }, 200);
        
//     //     // ON DESTROY
//     //     return () => {
//     //         // console.log('ON DESTROY');
//     //         clearInterval(interval);
//     //     }
//     // }, []);

    
//     const time = `${hour < 10 ? `0${hour}` : hour}:${minute < 10 ? `0${minute}` : minute}:${second < 10 ? `0${second}` : second}`;

//     return (
//         <>
//             {/* <p>{time === '0:0:0' ? 'Loading ...' : time}</p> */}
//             <p>{time}</p>
//         </>
//     )
// }

// export default TimeComponent;


// -----------------------------------------------
// -----------------------------------------------
// ----------------  CORRECTION  ----------------
// -----------------------------------------------
// -----------------------------------------------

import { useEffect, useState } from "react";


const TimeComponent = () => {

    const [time, setTime] = useState(new Date());

    // SET INTERVAL
    useEffect(() => {
        const timerId = setInterval(() => {
            setTime(new Date())
        }, 200);

        return () => {
            clearInterval(timerId);
        }
    }, [])



    // SET TIMEOUT
    // useEffect(() => {
    //     const timerId = setTimeout(() => {
    //         setTime(new Date())
    //     }, 200);

    //     return () => {
    //         clearInterval(timerId);
    //     }
    // })


    const hours = time.getHours().toString().padStart(2, 0)
    const minutes = time.getMinutes().toString().padStart(2, 0)
    const secondes = time.getSeconds().toString().padStart(2, 0)


    return (

        <>
            <p>{hours} : {minutes} : {secondes}</p>
        </>
    )

}


export default TimeComponent;