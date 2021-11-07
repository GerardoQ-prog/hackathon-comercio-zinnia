import { StyleSheet } from "react-native";
import { globalTheme } from "../../../assets/styles/global";


export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    modal: {
        backgroundColor: "#00000099",
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    modalContainer: {
        backgroundColor: "#f9fafb",
        width: 250,
        borderRadius: 5,
    },
    title: {
        color: "#000000",
        margin: 20,
        fontWeight: 'bold',
        textAlign: 'center'
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
        fontSize: 13,
        textAlign: 'center',
        marginVertical: 10
    },
    textExit: {
        color: globalTheme.colors.primary,
        textAlign: 'center',
        fontSize: 14,
        marginBottom: 20,
        fontWeight: 'normal',
        textDecorationLine: 'underline'
    }
});