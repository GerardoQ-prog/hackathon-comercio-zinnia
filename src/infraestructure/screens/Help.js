import React from 'react'
import { View, Text } from 'react-native'
import { globalTheme } from '../assets/styles/global'
import Layout from '../components/containers/Layout'
import Help from '../components/elements/Help'
import Header from '../components/ui/Header'

const HelpScreen = () => {
    return (
        <>
            <Header />
            <Layout color={globalTheme.colors.terciary}>
                <Help />
            </Layout>
        </>
    )
}

export default HelpScreen
