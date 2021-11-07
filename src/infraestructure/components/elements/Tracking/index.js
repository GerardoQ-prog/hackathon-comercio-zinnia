import React from 'react'
import { Text, View } from 'react-native'
import { ButtonPrimary } from '../../ui/Buttons'
import { styles } from './style'

const Tracking = () => {


    return (
        <View>
            <View style={styles.container}>
                <Text style={styles.text}>Tranquila Carla, la alerta ha sido enviado a tus contactos de emergencia, ellos podran ver tu ubicación en tiempo real</Text>
                <ButtonPrimary text="Detener Seguimiento" />
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>¿Necesitas contactarte con los numeros de emergencia?</Text>
                <ButtonPrimary text="Ver números de emergencia" />
            </View>
            <View style={styles.container}>
                <Text style={styles.text}>Visualiza las comisarias y centros de ayuda mas cercanos a ti</Text>
                <ButtonPrimary text="Ver comisarias cercanas" />
            </View>
        </View>
    )
}

export default Tracking
