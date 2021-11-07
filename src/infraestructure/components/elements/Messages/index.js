import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { AuthContext } from '../../../../domain/store/auth'
import { getConfigMessages } from '../../../../domain/store/config/actions'
import ModalMessage from '../ModalMessage'
import { styles } from './style'

const Messages = () => {

    const { authStore } = React.useContext(AuthContext)

    const [messages, setMessages] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [modalVisible, setModalVisible] = React.useState(false)

    const handlerModal = () => setModalVisible(!modalVisible)

    const handlerGetMessages = async () => {
        setLoading(true)
        const messages = await getConfigMessages(authStore.access_token)
        setMessages(messages)
        setLoading(false)
    }

    React.useEffect(() => {
        handlerGetMessages()
    }, [])

    return (
        <View>
            <Text style={styles.title}>Mensajes Predeterminados:</Text>
            {
                loading ? <Text style={styles.textLoading}>Cargando ... </Text> :
                    !messages || messages.length === 0 ?
                        <View>
                            <Text style={styles.textHelp}>No tienes mensajes predeterminados</Text>
                        </View>
                        : messages.map((item, index) => {
                            return (
                                <View key={index}>
                                    <Text style={styles.textHelp} > {index + 1}. {item.content}</Text>
                                </View>)
                        })
            }
            <TouchableOpacity style={{ display: 'flex', alignItems: 'center' }} onPress={handlerModal}>
                <Ionicons name="add-circle" size={35} color="#EC6670" />
            </TouchableOpacity>
            <ModalMessage handlerModal={handlerModal} messages={messages} setMessages={setMessages} modalVisible={modalVisible} />
        </View >
    )
}

export default Messages
