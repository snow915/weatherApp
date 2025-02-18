import React, {useEffect} from 'react';
import {StyleSheet, Text, TouchableOpacity} from "react-native";
import { useNavigation } from '@react-navigation/native';
import {WEATHER_DETAILS_SCREEN} from "../utils/constants";
import { useDispatch } from "react-redux";
import {saveCurrentCity} from "../redux/slices/generalInfoSlice";

const CityItem = ({city, state, country, coordinates}) => {
    const dispatch = useDispatch();
    const navigation = useNavigation();
    const navigateToWeatherDetails = () => {
        dispatch(saveCurrentCity({city, state, country, coordinates}));
        navigation.navigate(WEATHER_DETAILS_SCREEN);
    }

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
