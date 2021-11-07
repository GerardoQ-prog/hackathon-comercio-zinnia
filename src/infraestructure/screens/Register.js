import React from 'react'
import { globalTheme } from '../assets/styles/global'
import Layout from '../components/containers/Layout'
import FormRegister from '../components/elements/FormRegister'

const RegisterScreen = () => {
    return (
        <Layout color={globalTheme.colors.primary}>
            <FormRegister />
        </Layout>
    )
}

export default RegisterScreen
