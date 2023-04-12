import PropTypes from 'prop-types';
import { useState } from "react";
import { useEffect } from "react";
import { getWeather } from "../../../api/weather.api";
import ResponseDisplay from "./response-display/response-display";



// const URL_WEATHER = 'https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=6b13b192402533a8d049a8420ecd9a17';




const LiveBoard = ( { city } ) => {


    const [data, setData] = useState(null);
    const [isLoading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [timeRequest, setTimeRequest] = useState(new Date());


    
    useEffect(() => {
        // const url = URL_WEATHER.replace()
        console.log(city);

        getWeather(city) 
            .then((data) => {
                console.log('liveboard : ', data);
                setData(data);
            })
            
        
        // ↓ lorsque le composant est retiré ou modifié (démontage, remontage)
        return () => {
            setData(null);
            setLoading(true);
            setError(null);
        }

    }, [city, timeRequest])

    return (
        <>
            <button onClick={() => setTimeRequest(new Date())}>Reload</button>
            <ResponseDisplay {...data} />
        </>
    )
}

LiveBoard.propTypes = {
    city: PropTypes.string
}

LiveBoard.defaultProps = {
    city: 'Arlon'
}

export default LiveBoard;