import { StyleSheet } from "react-native";
import { globalTheme } from "../../../assets/styles/global";

export const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    input: {
        backgroundColor: globalTheme.colors.terciary,
        borderRadius: 8,
        color: globalTheme.colors.primary,
        padding: 10,
    },
    label: {
        color: globalTheme.colors.terciary,
        fontWeight: 'bold',
        marginBottom: 10,
        fontSize: 16,
        fontFamily: 'Raleway'
    }
})
