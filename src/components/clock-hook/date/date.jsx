// import { useEffect, useState } from "react";

// const DateComponent = () => {

//     const [date, setDate] = useState('');

//     useEffect(() => {

//         const months = [
//         "janvier", "février", "mars", "avril", "mai", "juin", "juillet",
//         "août", "septembre", "octobre", "novembre", "décembre"
//         ];

//         const today = new Date();
//         const day = today.getDate().toString().padStart(2, '0');
//         const month = months[today.getMonth()];
//         const year = today.getFullYear();

//         const formattedDate = `${day} ${month} ${year}`;
//         setDate(formattedDate);

//     }, []);

//     return (
//         <>
//             <p>{date}</p>
//         </>
//     )
// }

// export default DateComponent;



// -----------------------------------------------
// -----------------------------------------------
// ----------------  CORRECTION  ----------------
// -----------------------------------------------
// -----------------------------------------------



const DateComponent = () => {

    const today = new Date();

    const formattedDate = today.toLocaleDateString('fr-be', { day: '2-digit', month: 'long', year: 'numeric' });

    return (
        <>
            <p>{formattedDate}</p>
        </>
    )

}

export default DateComponent;