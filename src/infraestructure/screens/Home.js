import React from 'react'
import { globalTheme } from '../assets/styles/global'
import Layout from '../components/containers/Layout'
import NeedHelp from '../components/elements/NeedHelp'
import Tracking from '../components/elements/Tracking'
import Header from '../components/ui/Header'

const HomeScreen = () => {

    const [tracking, setTracking] = React.useState(false)
    const [init, setInit] = React.useState(null)

    React.useEffect(() => {
        if (!tracking) {
            clearInterval(init)
        }
    }, [tracking])

    return (
        <>
            <Header />
            <Layout color={globalTheme.colors.terciary}>
                {
                    !tracking ? <NeedHelp setTracking={setTracking} tracking={tracking} init={init} setInit={setInit} /> : <Tracking setTracking={setTracking} />
                }
            </Layout>
        </>
    )
}

export default HomeScreen
