import React from 'react';
import {StyleSheet, Text, View} from "react-native";

const WeatherHeader = ({date}) => {

    const getDayName = (date) => {
        const daysOfWeek = [
            'Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'
        ];
        const dayIndex = new Date(date).getUTCDay();
        return daysOfWeek[dayIndex];
    }

    const getDayOfMonth = (date) => {
        const [year, month, day] = date.split('-');
        const utcDate = new Date(Date.UTC(year, month - 1, day));
        return utcDate.getUTCDate();
    }

    return (
        <View style={styles.headerContainer}>
            <Text style={styles.header}>{getDayName(date)} - </Text>
            <Text style={styles.header}>{getDayOfMonth(date)}</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        marginTop: 20,
    },
    header: {
        fontSize: 24,
    },
});

export default WeatherHeader;
