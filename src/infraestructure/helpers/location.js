import * as Location from 'expo-location';


export const getCurrentLocation = async () => {
    let location = await Location.getCurrentPositionAsync({});
    return location
}