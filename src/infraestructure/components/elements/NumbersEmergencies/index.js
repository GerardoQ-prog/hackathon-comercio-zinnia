import React from 'react'
import { Image, Text, View } from 'react-native'
import Images from '../../../assets/images/Images'

const NumberEmergencies = () => {
    return (
        <View>
            <Text>Números de Emergencia</Text>
            <Text>¿Te encuentras en una emergencia?
                Contacta directamente a las autoridades.</Text>
            <View></View>
            <View>
                <Image source={Images.pnp} />
                <View>

                </View>
            </View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
            <View></View>
        </View>
    )
}

export default NumberEmergencies
