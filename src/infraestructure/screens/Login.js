import React from 'react'
import Layout from '../components/containers/Layout'
import { globalTheme } from '../assets/styles/global'
import FormLogin from '../components/elements/FormLogin'


const LoginScreen = () => {
    return (
        <Layout color={globalTheme.colors.primary}>
            <FormLogin />
        </Layout>

    )
}

export default LoginScreen
