import React from 'react'
import { Modal, Text, TouchableOpacity, View } from 'react-native';
import { AuthContext } from '../../../../domain/store/auth';
import { getConfigContacts, getConfigMessages } from '../../../../domain/store/config/actions';
import { styles } from './style';
import { ButtonPrimary } from '../../ui/Buttons'
import { useNavigation } from '@react-navigation/core';
import * as Location from 'expo-location';
import { trackOnline, trakInit } from '../../../http/socket';

const ModalMessages = ({ modalVisible, onClose, setModalVisible, setTracking, setInit }) => {

    const navigator = useNavigation()

    const { authStore } = React.useContext(AuthContext)
    const [messages, setMessages] = React.useState([])
    const [loading, setLoading] = React.useState(true)

    const handlerGetMessages = async () => {
        setLoading(true)
        const messages = await getConfigMessages(authStore.access_token)
        setMessages(messages)
        setLoading(false)
    }

    const handlerConfigurations = () => {
        setModalVisible(false)
        navigator.navigate('Configuración')
    }

    React.useEffect(() => {
        navigator.addListener('focus', () => {
            handlerGetMessages()
        });
    }, [])

    const handlerInitTracking = async (message) => {

        const contacts = await getConfigContacts(authStore.access_token)

        if (!contacts || contacts.lenght === 0) {
            Alert.alert('Por favor agregar un contacto en configuración')
        } else {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                Alert.alert('Por favor debe otorgar permisos de ubicación');
                return;
            }
            trakInit(authStore.user._id, message)
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
            setModalVisible(false)
            setTracking(true)
        }

    }


    return (
        <Modal
            transparent={true}
            visible={modalVisible}
        // onRequestClose={() => {
        //     Alert.alert('Modal has been closed.');
        // }}
        >
            <View style={styles.modal}>
                <View>
                    <View style={styles.modalContainer}>
                        <Text style={styles.title}>Elige algun mensaje predeterminado</Text>
                        {
                            loading ? <Text style={styles.textLoading}>Cargando ... </Text> :
                                !messages || messages.length === 0 ?
                                    <View>
                                        <Text style={styles.textHelp}>No cuentas con mensajes</Text>
                                        <ButtonPrimary text="Agregar mensajes" onPress={handlerConfigurations} />
                                    </View>
                                    : messages.map((item, index) => {
                                        return (
                                            <View key={index}>
                                                <View style={styles.line}></View>
                                                <Text style={styles.textHelp} onPress={() => handlerInitTracking(item._id)} >{item.title}</Text>
                                            </View>)
                                    })
                        }
                        <TouchableOpacity onPress={onClose}>
                            <Text style={styles.textExit}>Cerrar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalMessages
