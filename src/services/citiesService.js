export const searchCities = async (query) => {
    if(query) {
        const url = `https://search.reservamos.mx/api/v2/places?q=${query}`;
        const results = await fetch(url);
        const cities = await results.json();

        return cities?.map(city => ({
            id: city.id,
            city: city.display,
            state: city.state,
            country: city.country,
            resultType: city.result_type,
            latitude: city.lat,
            longitude: city.long,
        }));

    } else {
        return [];
    }
}
