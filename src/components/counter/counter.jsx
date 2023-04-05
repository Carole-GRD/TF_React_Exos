
import { useState } from "react";

const Counter = ( { incr } ) => {

    const [number, setNumber] = useState(0);

    const handleIncr = () => {
        setNumber(n => n + incr)
    }

    const handleReset = () => {
        setNumber(0);
    }

    return (
        <>
            <h3>{number}</h3>
            <div>
                <button onClick={handleIncr}>+ {incr}</button>
                {number !== 0 && <button onClick={handleReset}>Reset</button>} 
            </div>
        </>
    )
}


export default Counter;