import React from 'react'
import { globalTheme } from '../assets/styles/global'
import Header from '../components/ui/Header'
import Layout from '../components/containers/Layout'
import CommissionersMap from '../components/elements/CommissionersMap'

const CommissionersScreen = () => {
    return (
        <>
            <Header />
            <Layout color={globalTheme.colors.terciary} pv={0} ph={0}>
                <CommissionersMap />
            </Layout>
        </>
    )
}

export default CommissionersScreen
