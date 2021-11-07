import React from 'react'
import { Modal, Text, View } from 'react-native'
import { AuthContext } from '../../../../domain/store/auth'
import { postConfigMessages } from '../../../../domain/store/config/actions'
import { useForm } from '../../../hooks/useForm'
import { ButtonPrimary } from '../../ui/Buttons'
import { InputMessage } from '../../ui/Inputs'
import { styles } from './style'

const ModalMessage = ({ modalVisible, handlerModal, messages, setMessages }) => {

    const { authStore } = React.useContext(AuthContext)

    const { form, onReset, onChange } = useForm({
        title: '',
        content: '',
    });

    const handlerAddMessage = async () => {
        const newMessages = await postConfigMessages(messages, form, authStore.access_token,)
        if (newMessages) {
            setMessages(newMessages)
            handlerModal()
        }
    }

    React.useEffect(() => {
        onReset()
    }, [modalVisible])

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
                        <Text style={styles.title}>Agregar contacto</Text>
                        <InputMessage label="Titulo del mensaje" name="title" value={form.title} onChangeText={onChange} />
                        <InputMessage label="Contenido del mensaje" name="content" value={form.content} onChangeText={onChange} />
                        <ButtonPrimary text="Agregar" onPress={handlerAddMessage} />
                        <Text style={styles.textExit} onPress={handlerModal}>Cerrar</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalMessage
