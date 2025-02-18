import React, {useMemo, useState} from 'react';
import {View, Text, StyleSheet, FlatList, TextInput, ActivityIndicator} from "react-native";
import CityItem from "../components/CityItem";
import {useCities} from "../hooks/useCities";
import {SEARCH_INPUT_PLACEHOLDER} from "../utils/constants";
import { useSelector } from "react-redux";

const HomeScreen = () => {

    const [query, setQuery] = useState('');
    const { getCities, loading, error} = useCities();
    const cities = useSelector((state) => state.generalInfo.responseCities);

    const handleQuery = () => getCities({query});

    const renderItem = ({item}) => {
        const {city, state, country, latitude, longitude} = item;
        return <CityItem city={city} state={state} country={country} coordinates={[latitude, longitude]}/>
    };

    return (
        <View style={styles.container}>
            <TextInput onChangeText={setQuery} value={query} style={styles.input}
                       placeholder={SEARCH_INPUT_PLACEHOLDER} onEndEditing={handleQuery}/>
            {error && cities.length < 1 && <Text>{error}</Text>}
            {loading ? <ActivityIndicator size="large" color="black"/> : <FlatList
                data={cities}
                renderItem={renderItem}
                keyExtractor={(item) => item.id.toString()}
            />}

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
        marginBottom: 20
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
        marginTop: 10
    }
});

export default HomeScreen;
