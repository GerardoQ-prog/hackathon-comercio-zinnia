import React from 'react'
import { Alert, Image, Text, View } from 'react-native'
import { AuthContext } from '../../../../domain/store/auth'
import Images from '../../../assets/images/Images'
import { trackOnline, trakInit } from '../../../http/socket'
import { ButtonPrimary } from '../../ui/Buttons'
import { styles } from './style'
import * as Location from 'expo-location';

const NeedHelp = ({ setTracking }) => {

    const { authStore } = React.useContext(AuthContext)

    const handlerTracking = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            Alert.alert('Por favor debe otorgar permisos de ubicación');
            return;
        }
        trakInit(authStore.user._id)
        setInterval(async () => {
            let location = await Location.getCurrentPositionAsync({});
            trackOnline({
                lng: location.coords.longitude,
                lat: location.coords.latitude,
                user: authStore.user._id
            })
        }, 3000)
        setTracking(true)
    }

    return (
        <View>
            <View>
                <Image source={Images.logo} style={{ marginLeft: 30 }} />
            </View>
            <View style={styles.containerButton}>
                <Text style={styles.text}>Si te encuentras en una situación de peligro, presiona el siguiente boton para alertar a tus contactos de emergencia</Text>
                <ButtonPrimary text="¡Necesito Ayuda!" onPress={handlerTracking} />
                <Text style={styles.text}>Mantener presionado para elegir algun mensaje configurado o solo apretar una vez para enviar el predeterminado.</Text>
            </View>
        </View>
    )
}

export default NeedHelp
