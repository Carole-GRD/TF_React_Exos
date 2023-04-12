
// pnpm install axios
import axios from "axios";

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

      const COUNTRIES = {
        "FR": "France",
        "BE": "Belgique",
        "CA": "Canada",
        "DE": "Allemagne",
        "ES": "Espagne",
        "US": "États-Unis",
        "GB": "Royaume-Uni",
        "JP": "Japon",
        "AU": "Australie",
        "CH": "Suisse",
        "IT": "Italie",
        "NL": "Pays-Bas",
        "PT": "Portugal",
        "BR": "Brésil",
        "RU": "Russie",
        "CN": "Chine",
        "IN": "Inde",
        "MX": "Mexique",
        "AR": "Argentine",
        "ZA": "Afrique du Sud"
      };

      const country = COUNTRIES[data.sys.country];
      
      return {
        city: data.name,
        temp: data.main.temp + '°C',
        feels_like: data.main.feels_like + '°C',
        country: country,
        description: data.weather.map(weather => weather.description).join(', '),
        // description: data.weather[0].description,
        humidity: data.main.humidity + '%',
        rain: data.rain ? data.rain['1h'] + 'mm' : '/',
        clouds: data.clouds.all,
        icon: URL_ICON.replace('__code__', data.weather[0].icon)
      }
    });

  
}; 