import React from 'react'
import { FontAwesome5 } from '@expo/vector-icons';
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Images from '../../../assets/images/Images'
import { globalTheme } from '../../../assets/styles/global';
import { styles } from './style';
import { Linking } from 'react-native'


const NumberEmergencies = () => {

    const handlerLinkingNumber = (number) => {
        Linking.openURL(`tel:${number}`)
    }

    return (
        <View>
            <Text style={styles.title}>Números de Emergencia</Text>
            <Text style={styles.text}>¿Te encuentras en una emergencia?
                Contacta directamente a las autoridades.</Text>
            <View style={styles.line}></View>
            <View style={styles.container}>
                <Image source={Images.pnp} />
                <View >
                    <Text style={styles.titleNumber}>Policía Nacional del Perú</Text>
                    <TouchableOpacity style={styles.containerNumber} onPress={() => handlerLinkingNumber(105)} >
                        <FontAwesome5 name="phone-square-alt" size={24} color={globalTheme.colors.secondary} style={{ marginRight: 15 }} />
                        <Text style={styles.number}>105</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.container}>
                <Image source={Images.violencia} />
                <View>
                    <Text style={styles.titleNumber}>Violencia Familiar y Social</Text>
                    <TouchableOpacity style={styles.containerNumber} onPress={() => handlerLinkingNumber(100)}>
                        <FontAwesome5 name="phone-square-alt" size={24} color={globalTheme.colors.secondary} style={{ marginRight: 15 }} />
                        <Text style={styles.number}>100</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.container}>
                <Image source={Images.samu} />
                <View>
                    <Text style={styles.titleNumber}>SAMU</Text>
                    <TouchableOpacity style={styles.containerNumber} onPress={() => handlerLinkingNumber(106)}>
                        <FontAwesome5 name="phone-square-alt" size={24} color={globalTheme.colors.secondary} style={{ marginRight: 15 }} />
                        <Text style={styles.number}>106</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.line}></View>
            <View style={styles.container}>
                <Image source={Images.bomberos} />
                <View>
                    <Text style={styles.titleNumber}>Bomberos</Text>
                    <TouchableOpacity style={styles.containerNumber} onPress={() => handlerLinkingNumber(116)}>
                        <FontAwesome5 name="phone-square-alt" size={24} color={globalTheme.colors.secondary} style={{ marginRight: 15 }} />
                        <Text style={styles.number}>116</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.line}></View>
        </View >
    )
}

export default NumberEmergencies
