import { Alert } from "react-native"
import { ConfigRepository } from "../../../infraestructure/repositories/config.repository"

export const getConfigMessages = async (token) => {
    const response = await ConfigRepository.getConfig(token)
    if (response.response.data) {
        return response.response.data.messages
    } else {
        return null
    }
}

export const getConfigContacts = async (token) => {
    const response = await ConfigRepository.getConfig(token)
    if (response.response.data) {
        return response.response.data.contacts
    } else {
        return null
    }
}

export const postConfigContacts = async (contacts, data, token) => {

    let contactsArr = []
    if (contacts) {
        contactsArr = [
            ...contacts,
            data
        ]
    } else {
        contactsArr = [
            data
        ]
    }

    const response = await ConfigRepository.postConfig({
        contacts: contactsArr,
    }, token)
    if (response.status === 200) {
        const contacts = getConfigContacts(token)
        return contacts
    } else {
        Alert.alert(response.response.error.message)
    }

}

export const postConfigMessages = async (messages, data, token) => {

    let messagesArr = []
    if (messages) {
        messagesArr = [
            ...messages,
            data
        ]
    } else {
        messagesArr = [
            data
        ]
    }

    const response = await ConfigRepository.postConfig({
        messages: messagesArr,
    }, token)
    if (response.status === 200) {
        const contacts = getConfigMessages(token)
        return contacts
    } else {
        Alert.alert(response.response.error.message)
    }

}