import React from 'react'
import { Modal, Text, View } from 'react-native'
import { AuthContext } from '../../../../domain/store/auth'
import { postConfigContacts } from '../../../../domain/store/config/actions'
import { useForm } from '../../../hooks/useForm'
import { ButtonPrimary } from '../../ui/Buttons'
import { InputMessage } from '../../ui/Inputs'
import { styles } from './style'

const ModalContact = ({ modalVisible, handlerModal, contacts, setContacts }) => {

    const { authStore } = React.useContext(AuthContext)

    const { form, onReset, onChange } = useForm({
        name: '',
        phone: '',
    });

    const handlerAddContact = async () => {
        const newContacts = await postConfigContacts(contacts, form, authStore.access_token,)
        if (newContacts) {
            setContacts(newContacts)
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
                        <InputMessage label="Nombre de contacto" name="name" value={form.name} onChangeText={onChange} />
                        <InputMessage label="Número de contacto" name="phone" value={form.phone} onChangeText={onChange} />
                        <ButtonPrimary text="Agregar" onPress={handlerAddContact} />
                        <Text style={styles.textExit} onPress={handlerModal}>Cerrar</Text>
                    </View>
                </View>
            </View>
        </Modal>
    )
}

export default ModalContact
