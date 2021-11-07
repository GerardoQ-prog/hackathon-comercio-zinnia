import { StyleSheet } from "react-native";
import { Dimensions } from 'react-native';

export const styles = StyleSheet.create({
    containerMap: {
        position: 'relative'
    },
    map: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height - 128,
    },
    floatTitle: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 5,
        padding: 20,
        paddingTop: 8,
    },
    title: {
        fontSize: 16,
        textAlign: 'center',
        padding: 6,
        borderRadius: 3,
        backgroundColor: '#ffffff',
        color: "#000"
    },
    errorContainer: {
        borderColor: '#af0000'
    }
})
