import React from 'react'
import { Image, Text, View } from 'react-native'
import Images from '../../../assets/images/Images'
import { ButtonPrimary } from '../../ui/Buttons'
import { styles } from './style'

const NeedHelp = () => {
    return (
        <View>
            <View>
                <Image source={Images.logo} style={{ marginLeft: 30 }} />
            </View>
            <View style={styles.containerButton}>
                <Text style={styles.text}>Si te encuentras en una situación de peligro, presiona el siguiente boton para alertar a tus contactos de emergencia</Text>
                <ButtonPrimary text="¡Necesito Ayuda!" />
                <Text style={styles.text}>Mantener presionado para elegir algun mensaje configurado o solo apretar una vez para enviar el predeterminado.</Text>
            </View>
        </View>
    )
}

export default NeedHelp
