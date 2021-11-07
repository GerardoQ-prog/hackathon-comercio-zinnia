import React from 'react'
import { View, Text } from 'react-native'
import { AuthContext } from '../../domain/store/auth'
import { globalTheme } from '../assets/styles/global'
import Layout from '../components/containers/Layout'
import NeedHelp from '../components/elements/NeedHelp'
import Header from '../components/ui/Header'

const HomeScreen = () => {

    const context = React.useContext(AuthContext)
    console.log(context)

    return (
        <>
            <Header />
            <Layout color={globalTheme.colors.terciary}>
                <NeedHelp />
            </Layout>
        </>
    )
}

export default HomeScreen
