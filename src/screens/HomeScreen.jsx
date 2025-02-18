import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList, TextInput} from "react-native";
import CityItem from "../components/CityItem";
import {useCities} from "../hooks/useCities";

const HomeScreen = () => {

    const [query, setQuery] = useState('');
    const {cities, getCities} = useCities({query});

    const handleQuery = () => getCities({query});

    const renderItem = ({item}) => {
        const {city, state, country, latitude, longitude} = item;
        return <CityItem city={city} state={state} country={country} coordenates={[latitude, longitude]} />
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>ReservamosWeatherApp</Text>
            <TextInput onChangeText={setQuery} value={query} style={styles.input}
                       placeholder="Ciudad de México, Monterrey..." onEndEditing={handleQuery} />
            <FlatList
                data={cities}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />

        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    input: {
        borderWidth: 1,
        height: 40,
        padding: 10,
        marginVertical: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10
    }
});

export default HomeScreen;
