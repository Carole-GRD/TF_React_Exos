import { useState } from "react";
import LiveBoard from "../../components/weather-ajax/liveboard/liveboard";
import SearchBar from "../../components/weather-ajax/search-bar/search-bar";


const Weather = () => {

    const [search, setSearch] = useState(null);

    
    // Méthode envoyer aux enfants pour mettre à jour le parent
    const handleCity = ({city}) => {
        setSearch(city);
        console.log('weather-ajax.jsx - city : ', city);
    }

    return (
        <>
            <SearchBar label="Ville" onSearch={handleCity} />
            {/* ↑ le composant "search-bar" nous envoie les coordonnées à chercher */}
            {search && <LiveBoard city={search} /> }
            {/* ↑ le composant */}
        </>
    )
}

export default Weather;