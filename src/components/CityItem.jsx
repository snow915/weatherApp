import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';

const CityItem = ({city, state, country, coordenates}) => {

    const navigation = useNavigation();
    const navigateToWeatherDetails = () => navigation.navigate('WeatherDetails', {city, state, country, coordenates});

    return (
        <TouchableOpacity onPress={navigateToWeatherDetails} style={styles.container}>
            <Text style={styles.title}>{city} - {state}</Text>
            <Text>{country}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    container: {
        padding: 20,
        borderBottomWidth: 1,
        borderColor: '#ccc',
        backgroundColor: 'transparent',
    },
    title: {
        fontSize: 18,
        marginBottom: 5
    }
});

export default CityItem;
