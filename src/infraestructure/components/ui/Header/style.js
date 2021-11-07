import { StyleSheet } from "react-native";
import { globalTheme } from "../../../assets/styles/global";

export const styles = StyleSheet.create({
    container: {
        backgroundColor: globalTheme.colors.primary,
        padding: 20,
        height: 80,
        flexDirection: 'row'
    },
    containerUser: {
        flexDirection: 'row',
        marginVertical: 20,
        height: 80,
        flexGrow: 1
    },
    nameUser: {
        marginLeft: 10,
        color: globalTheme.colors.terciary,
        fontWeight: 'bold',
        fontSize: 18
    }
})
