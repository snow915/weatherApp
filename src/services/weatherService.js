const API = '57d710a96a0aeb27b548f4f4ce362db9';
export const searchWeatherDetails = async (coordenates) => {
    if(coordenates.length > 0) {
        const lat = coordenates[0];
        const lon = coordenates[1];
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API}`;
        const results = await fetch(url);
        const weatherDetails = await results.json();
        if(weatherDetails.cod != '200') return []
        const {list} = weatherDetails;

        return list?.map(wth => ({
            id: wth.dt,
            mainConditions: wth.main,
            weatherDescription: wth.weather,
            weatherDate: wth.dt_txt
        }));

    } else {
        return [];
    }
}
