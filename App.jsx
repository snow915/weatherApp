import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
} from 'react-native';
import Routes from "./src/routes/Routes";
import {Provider} from "react-redux";
import {store} from "./src/redux/store";

function App() {

    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <Routes/>
            </SafeAreaView>
        </Provider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default App;
