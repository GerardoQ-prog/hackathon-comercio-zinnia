import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import { globalTheme } from '../assets/styles/global'
import Layout from '../components/containers/Layout'
import Contacts from '../components/elements/Contacts'
import MessagePrincipal from '../components/elements/MessagePrincipal'
import Messages from '../components/elements/Messages'
import Header from '../components/ui/Header'

const ConfigurationsScreen = () => {
    return (
        <>
            <Header />
            <Layout color={globalTheme.colors.terciary}>
                <Contacts />
                {/* <MessagePrincipal /> */}
                <Messages />
            </Layout>
        </>
    )
}

export default ConfigurationsScreen
