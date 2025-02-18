import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import Routes from "./src/routes/Routes";

function App() {

    return (
        <SafeAreaView style={styles.container}>
            <Routes/>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
