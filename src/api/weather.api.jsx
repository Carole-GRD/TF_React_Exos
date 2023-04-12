
// pnpm install axios
import axios from "axios";

import countryList from './../data/country.json';


// ATTENTION : les "url" et la "key" dans un fichier ".env"  !!!
// Voir Correction : https://github.com/FormCours/TF_2022_FS_Web__React_Exo

export const getWeather = (city) => {

    return axios.get('https://api.openweathermap.org/data/2.5/weather', {
      params: {
        q: city,
        units: 'metric',
        lang:'fr',
        appid: '6b13b192402533a8d049a8420ecd9a17'
      }
    })
    .then(({data}) => {
      console.log('weather.api.jsx : ', data);

      const URL_ICON = 'https://openweathermap.org/img/wn/__code__@2x.png';


      const country = countryList[data.sys.country];
      // console.log('country : ', data.sys.country);
      
      return {
        city: data.name,
        temp: data.main.temp + '°C',
        feels_like: data.main.feels_like + '°C',
        country: country ? country : data.sys.country,
        description: data.weather.map(weather => weather.description).join(', '),
        // description: data.weather[0].description,
        humidity: data.main.humidity + '%',
        rain: data.rain ? data.rain['1h'] + 'mm' : '0mm',
        clouds: data.clouds.all,
        iconUrl: URL_ICON.replace('__code__', data.weather[0].icon)
      }
    });

  
}; 