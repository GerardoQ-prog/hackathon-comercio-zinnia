import { StyleSheet } from "react-native";
import { globalTheme } from "../../../assets/styles/global";

export const styles = StyleSheet.create({
    appButtonContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,

        elevation: 24,
        backgroundColor: globalTheme.colors.terciary,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginVertical: 30,
        marginHorizontal: 30,

    },
    appButtonText: {
        fontSize: 18,
        color: globalTheme.colors.primary,
        fontWeight: "bold",
        alignSelf: "center",
        textTransform: "uppercase"
    },
    appButtonRegister: {
        // elevation: 8,
        backgroundColor: 'transparent',
        // marginHorizontal: 30,
    },
    appButtonTextRegister: {
        fontSize: 18,
        color: globalTheme.colors.terciary,
        fontWeight: "normal",
        alignSelf: "center",
        fontSize: 16,
        textDecorationLine: 'underline'
    },
    appButtonPrimary: {
        elevation: 8,
        backgroundColor: globalTheme.colors.secondary,
        borderRadius: 10,
        paddingVertical: 10,
        paddingHorizontal: 12,
        marginVertical: 30,
        marginHorizontal: 30,
    },
    appButtonTextPrimary: {
        fontSize: 18,
        color: globalTheme.colors.terciary,
        fontWeight: "bold",
        alignSelf: "center",
        fontSize: 18,
        textAlign: 'center'
    },
})
