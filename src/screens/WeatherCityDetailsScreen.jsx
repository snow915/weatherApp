import React, {useEffect} from 'react';
import {StyleSheet, Text, View, SectionList, ActivityIndicator} from "react-native";
import {useRoute} from '@react-navigation/native';
import {useWeather} from "../hooks/useWeather";
import WeatherItem from "../components/WeatherItem";

const WeatherCityDetailsScreen = () => {
    const route = useRoute();
    const {city, coordinates, state, country} = route.params || {};
    const {weather, getWeather, loading} = useWeather();

    useEffect(() => {
        getWeather(coordinates);
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
