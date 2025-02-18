import React, {useEffect} from 'react';
import {StyleSheet, Text, View, SectionList, ActivityIndicator} from "react-native";
import {useWeather} from "../hooks/useWeather";
import WeatherItem from "../components/WeatherItem";
import { useSelector } from "react-redux";

const WeatherCityDetailsScreen = () => {
    const {getWeather, loading} = useWeather();
    const weather = useSelector((state) => state.generalInfo.responseWeather);
    const currentCity = useSelector((state) => state.generalInfo.currentCity);
    const {city, state, country} = currentCity;

    useEffect(() => {
        getWeather();
    }, []);

    const renderItem = ({item}) => <WeatherItem data={item}/>
    const renderHeader = ({section: {date}}) => <Text style={styles.header}>{date}</Text>

    return (
        <View style={styles.container}>
            <View style={styles.headerTitleContainer}>
                <Text style={styles.title}>{city} - {state}</Text>
                <Text style={styles.subtitle}>{country}</Text>
            </View>
            {loading ?
                <ActivityIndicator size="large" color="black"/>
                : <SectionList
                    sections={weather}
                    keyExtractor={(item, index) => item + index}
                    renderItem={renderItem}
                    renderSectionHeader={renderHeader}
                />}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    headerTitleContainer: {
        marginBottom: 20,
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    subtitle: {
        marginLeft: 5,
    },
    header: {
        fontSize: 24,
    },
});

export default WeatherCityDetailsScreen;
