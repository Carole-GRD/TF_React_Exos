

const ResponseDisplay = ( { city, temp, feels_like, country, description, humidity, rain, clouds, icon } ) => {

    return (
        <>
            <h2>{city}</h2>
            <img src={icon} alt="Icône" />
            <p>Température : {temp}</p>
            <p>Temprature ressentie : {feels_like}</p>
            <p>Pays : {country}</p>
            <p>Conditions météorologiques : {description ? description.charAt(0).toUpperCase() + description.slice(1) : '/'}</p>
            <p>Humidité : {humidity}</p>
            <p>Volume de pluie pour la dernière heure : {rain ? rain : '/'}</p>
            <p>Nébulosité : {clouds}%</p>
            
        </>
    )
}



export default ResponseDisplay;