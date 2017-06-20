const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=14c61956cd11471cff7bfafff6b0a3d2&units=metric';

// 14c61956cd11471cff7bfafff6b0a3d2

module.exports = {
    getTemp: function(location) {
        var encodedLocation = encodeURIComponent(location);
        var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

        return axios.get(requestUrl).then((res) => {
            if(res.data.cod && res.data.message) {
                console.log(res);
                throw new Error(res.data.message);
            } else {
                return res.data.main.temp;
            }
        }, (res) => {
            console.log(res);
            throw new Error(res.status);
        })
    }
};