import { StyleSheet } from "react-native";
import { globalTheme } from "../../../assets/styles/global";

export const styles = StyleSheet.create({
    title: {
        color: globalTheme.colors.title,
        textAlign: 'center',
        fontSize: 18,
        fontWeight: 'bold'
    },
    text: {
        color: globalTheme.colors.text,
        fontSize: 16,
        textAlign: 'center',
        marginVertical: 10
    },
    titleNumber: {
        color: globalTheme.colors.title,
        fontWeight: 'normal',
        fontSize: 14
    },
    number: {
        color: globalTheme.colors.title,
        fontWeight: 'bold',
        fontSize: 36
    },
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around'
    },
    containerNumber: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    line: {
        backgroundColor: '#DBDBDB',
        height: 1,
        width: '100%',
        marginVertical: 20
    }
})
