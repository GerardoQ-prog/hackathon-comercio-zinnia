import { StyleSheet } from "react-native";

export const style = (color, ph = 30, pv = 50) => StyleSheet.create({
        container: {
                flex: 1,
                paddingHorizontal: ph,
                paddingVertical: pv,
                backgroundColor: color,
        },
});