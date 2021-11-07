import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Ionicons } from '@expo/vector-icons';

import { AuthContext } from '../../../../domain/store/auth'
import { getConfigContacts } from '../../../../domain/store/config/actions'
import { styles } from './style.';
import ModalContact from '../ModalContact'

const Contacts = () => {

    const { authStore } = React.useContext(AuthContext)

    const [contacts, setContacts] = React.useState([])
    const [loading, setLoading] = React.useState(true)
    const [modalVisible, setModalVisible] = React.useState(false)

    const handlerModal = () => setModalVisible(!modalVisible)

    const handlerGetContacts = async () => {
        setLoading(true)
        const contacts = await getConfigContacts(authStore.access_token)
        setContacts(contacts)
        setLoading(false)
    }

    React.useEffect(() => {
        handlerGetContacts()
    }, [])

    return (
        <View>
            <Text style={styles.title}>Contactos de emergencia:</Text>
            {
                loading ? <Text style={styles.textLoading}>Cargando ... </Text> :
                    !contacts || contacts.length === 0 ?
                        <View>
                            <Text style={styles.textHelp}>No tienes contactos de emergencia</Text>
                        </View>
                        : contacts.map((item, index) => {
                            return (
                                <View key={index}>
                                    <Text style={styles.textHelp} >{index + 1}.  {item.name} - {item.phone}</Text>
                                </View>)
                        })
            }
            <TouchableOpacity style={{ display: 'flex', alignItems: 'center' }} onPress={handlerModal}>
                <Ionicons name="add-circle" size={35} color="#EC6670" />
            </TouchableOpacity>
            <ModalContact modalVisible={modalVisible} handlerModal={handlerModal} contacts={contacts} setContacts={setContacts} />
        </View>
    )
}

export default Contacts
