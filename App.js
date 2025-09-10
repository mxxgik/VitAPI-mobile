import {StatusBar} from 'expo-status-bar';
import {StyleSheet, Text, View} from 'react-native';
import AppNavigation from "./src/navigation/appNavigation";

export default function App() {
    return (
        <>
            <StatusBar style="auto"/>
            <AppNavigation />
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});