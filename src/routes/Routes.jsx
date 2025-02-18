import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from "../screens/HomeScreen";
import WeatherCityDetailsScreen from "../screens/WeatherCityDetailsScreen";
import {HOME_SCREEN, TITLE_HOME_SCREEN, TITLE_WEATHER_DETAILS_SCREEN, WEATHER_DETAILS_SCREEN} from "../utils/constants";

const Stack = createNativeStackNavigator();

const Routes = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName={HOME_SCREEN}>
                <Stack.Screen
                    name={HOME_SCREEN}
                    component={HomeScreen}
                    options={{ title: TITLE_HOME_SCREEN }}
                />
                <Stack.Screen
                    name={WEATHER_DETAILS_SCREEN}
                    component={WeatherCityDetailsScreen}
                    options={{ title: TITLE_WEATHER_DETAILS_SCREEN }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Routes;
