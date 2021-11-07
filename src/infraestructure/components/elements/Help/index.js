import React from 'react'
import { Text, View } from 'react-native'
import { ButtonPrimary } from '../../ui/Buttons'
import { styles } from './style'

const Help = () => {
    return (
        <View>
            <Text style={styles.title}>Ayuda Psicológica</Text>
            <Text style={styles.text}>¿Necesitas orientación psicológica?
                Contacta directamente a un especialista</Text>
            <ButtonPrimary text="Contactar" />
        </View>
    )
}

export default Help
