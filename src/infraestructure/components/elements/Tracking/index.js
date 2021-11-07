import React from 'react'
import { Text, View } from 'react-native'
import { AuthContext } from '../../../../domain/store/auth'
import { ButtonPrimary } from '../../ui/Buttons'
import { styles } from './style'
import { trackOffline } from '../../../http/socket'
import { useNavigation } from '@react-navigation/core'

const Tracking = ({ setTracking }) => {

    const navigator = useNavigation()

    const { authStore } = React.useContext(AuthContext)

    const handlerTrackingOffline = () => {
        trackOffline(authStore.user._id)
        setTracking(false)
    }

    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>Tranquilo(a) {authStore.user.fullName}, la alerta ha sido enviado a tus contactos de emergencia, ellos podran ver tu ubicación en tiempo real</Text>
                <ButtonPrimary text="Detener Seguimiento" onPress={handlerTrackingOffline} />
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>¿Necesitas contactarte con los numeros de emergencia?</Text>
                <ButtonPrimary text="Ver números de emergencia" onPress={() => navigator.navigate('Emergencias')} />
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Visualiza las comisarias y centros de ayuda mas cercanos a ti</Text>
                <ButtonPrimary text="Ver comisarias cercanas" onPress={() => navigator.navigate('Comisarias')} />
            </View>
        </View>
    )
}

export default Tracking
