import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

const WeatherItem = ({data}) => {

    const {weatherDate, weatherDescription, mainConditions} = data;
    const {temp, temp_max, temp_min, feels_like} = mainConditions;

    const fahrenheitToCelsius = (kelvin) => (kelvin - 273.15).toFixed(2) + ' C';
    const formatHour = (date) => date.split(" ")[1].slice(0, 5)
    const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);


    return (
        <View style={styles.item}>
            <View style={{flexWrap: 'wrap', justifyContent: 'space-between'}}>
                <Image
                    source={{ uri: `https://openweathermap.org/img/wn/${weatherDescription[0].icon}@2x.png` }}
                    style={styles.image}
                />
                <View style={styles.weatherDescriptionContainer}>
                    <Text>{formatHour(weatherDate)} hrs</Text>
                    <Text style={styles.title}>{capitalizeFirstLetter(weatherDescription[0].description)}</Text>
                </View>
            </View>
            <View style={styles.mainConditionsContainer}>
                <Text>Temp: {fahrenheitToCelsius(temp)}</Text>
                <Text>Max: {fahrenheitToCelsius(temp_max)}</Text>
                <Text>Min: {fahrenheitToCelsius(temp_min)}</Text>
                <Text>Sensación: {fahrenheitToCelsius(feels_like)}</Text>
            </View>

        </View>
    );
};

const styles = StyleSheet.create({
    title: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#ffffff',
        marginVertical: 8,
        gap: 10,
        borderRadius: 8,
    },
    weatherDescriptionContainer: {
        paddingLeft: 10, paddingBottom: 15
    },
    mainConditionsContainer: {
        padding: 20
    },
    image: {
        width: 50,
        height: 50,
        resizeMode: 'contain',
    },
});

export default WeatherItem;
