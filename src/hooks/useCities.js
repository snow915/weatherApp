import {useState, useCallback} from "react";
import {searchCities} from "../services/citiesService";

export const useCities = () => {
    const [responseCities, setResponseCities] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const getCities = useCallback(async ({query}) => {
        try {
            setLoading(true);
            setError(null);
            const citiesList = await searchCities(query);
            //Hago dicha filtro porque el servicio entrega ubicaciones dentro de una misma ciudad
            const finalData = citiesList.filter(x => x.resultType === 'city');
            setResponseCities(finalData);
            if(finalData.length < 1){
                setError('No se encontraron ciudades');
            } else {
                setError('');
            }
        } catch (e) {
            setError(e.toString());
        } finally {
            setLoading(false);
        }
    }, []);

    return {cities: responseCities, getCities, loading, error};
};
