import {useState, useCallback} from "react";
import {searchWeatherDetails} from "../services/weatherService";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import {saveWeather} from "../redux/slices/generalInfoSlice";

export const useWeather = () => {
    const dispatch = useDispatch();
    const coordinates = useSelector((state) => state.generalInfo.currentCity.coordinates);

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getWeather = useCallback(async () => {
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
            dispatch(saveWeather(result));
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }, []);

    return {getWeather, loading};
};
