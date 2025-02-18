import React from 'react';
import {StyleSheet, Text, View} from "react-native";
import { useRoute } from '@react-navigation/native';

const WeatherCityDetailsScreen = () => {
    const route = useRoute();
    const { city, coordenates } = route.params || {};

    return (
        <View style={styles.container}>
            <Text style={styles.title}>WeatherCityDetailsScreen</Text>
            <Text>{city}</Text>
            <Text>{coordenates}</Text>
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

export default WeatherCityDetailsScreen;
