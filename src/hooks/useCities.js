import {useState, useCallback} from "react";
import {searchCities} from "../services/citiesService";

export const useCities = ({query}) => {
    const [responseCities, setResponseCities] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const getCities = useCallback(async ({query}) => {
        try {
            setLoading(true);
            setError(null);
            const citiesList = await searchCities(query);
            const finalData = citiesList.filter(x => x.resultType === 'city');
            setResponseCities(finalData);
        } catch (e) {
            setError(e);
        } finally {
            setLoading(false);
        }
    }, []);

    return {cities: responseCities, getCities, loading};
};
