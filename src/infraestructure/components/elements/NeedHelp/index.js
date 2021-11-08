import React from 'react'
import { Alert, Image, Text, View } from 'react-native'
import { AuthContext } from '../../../../domain/store/auth'
import Images from '../../../assets/images/Images'
import { trackOnline, trakInit } from '../../../http/socket'
import { ButtonPrimary } from '../../ui/Buttons'
import { styles } from './style'
import * as Location from 'expo-location';
import ModalMessages from '../ModalMessages'
import { getConfigContacts } from '../../../../domain/store/config/actions'

const NeedHelp = ({ setTracking, tracking, init, setInit }) => {

    // const [socket] = React.useState(connectSocketServer());

    const [modalVisible, setModalVisible] = React.useState(false)

    const { authStore } = React.useContext(AuthContext)

    const handlerModal = () => {
        setModalVisible(!modalVisible);
    }


    const handlerTracking = async () => {

        const contacts = await getConfigContacts(authStore.access_token)

        if (!contacts || contacts.lenght === 0) {
            Alert.alert('Por favor agregar un contacto en configuración')
        } else {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Por favor debe otorgar permisos de ubicación');
                return;
            }
            trakInit(authStore.user._id)
            setInit(
                setInterval(async () => {
                    let location = await Location.getCurrentPositionAsync({});
                    trackOnline({
                        lng: location.coords.longitude,
                        lat: location.coords.latitude,
                        user: authStore.user._id
                    })
                }, 3000)
            )
            setTracking(true)
        }
    }

    return (
        <View>
            <View>
                <Image source={Images.logo} style={{ marginLeft: 50 }} />
            </View>
            <View style={styles.containerButton}>
                <Text style={styles.text}>Si te encuentras en una situación de peligro, presiona el siguiente boton para alertar a tus contactos de emergencia</Text>
                <ButtonPrimary text="¡Necesito Ayuda!" onPress={handlerTracking} onLongPress={handlerModal} />
                <Text style={styles.text}>Mantener presionado para elegir algun mensaje configurado o solo apretar una vez para enviar el predeterminado.</Text>
                <ModalMessages modalVisible={modalVisible} onClose={handlerModal} setModalVisible={setModalVisible} setTracking={setTracking} setInit={setInit} />
            </View>
        </View>
    )
}

export default NeedHelp
