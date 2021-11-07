import { StyleSheet } from "react-native";

export const style = (color) => StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 30,
        paddingVertical: 50,
        backgroundColor: color,
    },
});