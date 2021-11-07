import { StyleSheet } from "react-native";
import { globalTheme } from "../../../assets/styles/global";

export const styles = StyleSheet.create({
    title: {
        color: globalTheme.colors.title,
        fontSize: 16,
        textAlign: 'center',
        fontWeight: 'bold',
        marginVertical: 20
    },
    text: {
        color: globalTheme.colors.text,
        fontSize: 13,
        textAlign: 'center'
    }
})
