import React, { useEffect, useState } from 'react'
import { View, Text, Image } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import { getCurrentLocation } from "../../../helpers/location"
import * as Location from 'expo-location';
import { styles } from "./style";
import Images from "../../../assets/images/Images"
import axios from "axios"

const API_KEY = "AIzaSyDtxjBY6iyU9YtA4s0zCuLY8gd0uY80-1o";

const CommissionersMap = () => {

    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null)
    const [commissioners, setCommissioners] = useState([]);

    const getCommissioners = async ({ latitude, longitude }) => {
        try {
            const { data, status } = await axios.get(`https://maps.googleapis.com/maps/api/place/search/json`, {
                params: {
                    location: `${latitude},${longitude}`,
                    rankby: "distance",
                    types: "police",
                    sensor: "false",
                    language: 'es',
                    key: API_KEY
                }
            });
            if (status != 200 || data.status != 'OK') return;
            return data.results;
        } catch (err) {
            return [];
        }
    }

    useEffect(() => {

        async function loadLocationsAndInfo() {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('El permiso para acceder a la localización fue denegado');
                return;
            }
            const currentLoc = await getCurrentLocation();
            setLocation(currentLoc.coords);
            const results = await getCommissioners(currentLoc.coords);
            setCommissioners(results);
        }

        loadLocationsAndInfo();

    }, [])

    return (
        <View style={styles.containerMap}>
            {
                location != null && errorMsg == null
                    ? (
                        <>
                            <View style={styles.floatTitle}>
                                <Text style={styles.title}>Comisarías cercanas</Text>
                            </View>
                            <MapView
                                style={styles.map}
                                initialRegion={{
                                    latitude: location.latitude,
                                    longitude: location.longitude,
                                    latitudeDelta: 0.0922,
                                    longitudeDelta: 0.0421,
                                }}
                            >

                                {commissioners.map((marker, index) => (
                                    <Marker
                                        key={index}
                                        coordinate={{ latitude: marker.geometry.location.lat, longitude: marker.geometry.location.lng }}
                                        title={marker.name}
                                        description={marker.vicinity}
                                        icon={Images.policeStation}
                                    />
                                ))}

                                {
                                    location
                                        ? (<Marker
                                            coordinate={location}
                                            title="Tú ubicación actual"
                                            icon={Images.person}
                                        />)
                                        : null
                                }

                            </MapView>
                        </>
                    )
                    : (<View style={{ ...styles.floatTitle, ...styles.errorContainer }}>
                        <Text style={{ ...styles.title, color: '#AF0000' }}>{errorMsg}</Text>
                    </View>)
            }
        </View>
    )
}

export default CommissionersMap
