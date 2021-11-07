import { StyleSheet } from "react-native";
import { globalTheme } from "../../../assets/styles/global";


export const styles = StyleSheet.create({
    title: {
        color: globalTheme.colors.primary,
        fontWeight: 'bold',
        marginVertical: 10,
        fontSize: 18
    },
    textLoading: {
        color: globalTheme.colors.primary,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 10
    },
    line: {
        backgroundColor: '#DBDBDB',
        height: 1,
        width: '100%'
    },
    textHelp: {
        color: '#000000',
        fontSize: 14,
        textAlign: 'center',
        marginVertical: 10
    },
    textExit: {
        color: globalTheme.colors.secondary,
        textAlign: 'center',
        fontSize: 14,
        marginVertical: 20,
        fontWeight: 'bold'
    }
});