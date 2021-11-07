import React from 'react'
import { globalTheme } from '../assets/styles/global'
import Layout from '../components/containers/Layout'
import NeedHelp from '../components/elements/NeedHelp'
import Tracking from '../components/elements/Tracking'
import Header from '../components/ui/Header'

const HomeScreen = () => {

    const [tracking, setTracking] = React.useState(false)

    return (
        <>
            <Header />
            <Layout color={globalTheme.colors.terciary}>
                {
                    !tracking ? <NeedHelp setTracking={setTracking} /> : <Tracking />
                }
            </Layout>
        </>
    )
}

export default HomeScreen
