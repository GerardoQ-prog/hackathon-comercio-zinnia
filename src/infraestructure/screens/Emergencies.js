import React from 'react'
import { globalTheme } from '../assets/styles/global'
import Layout from '../components/containers/Layout'
import NumberEmergencies from '../components/elements/NumbersEmergencies'
import Header from '../components/ui/Header'

const EmergenciesScreen = () => {
    return (
        <>
            <Header />
            <Layout color={globalTheme.colors.terciary}>
                <NumberEmergencies />
            </Layout>
        </>
    )
}

export default EmergenciesScreen
