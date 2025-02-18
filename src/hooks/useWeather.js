import {useState, useCallback} from "react";
import {searchWeatherDetails} from "../services/weatherService";

export const useWeather = () => {
    const [responseWeather, setWeather] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getWeather = useCallback(async (coordinates) => {
        try {
            setLoading(true);
            setError(null);
            const weatherDetails = await searchWeatherDetails(coordinates);
            const groupedData = weatherDetails.reduce((acc, item) => {
                const [date] = item.weatherDate.split(" "); //Extrae la fecha
                if (!acc[date]) {
                    acc[date] = { date, data: [] };
                }
                acc[date].data.push(item);
                return acc;
            }, {});

            const result = Object.values(groupedData);
            console.log(result);
            setWeather(result);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }, []);

    return {weather: responseWeather, getWeather, loading};
};
