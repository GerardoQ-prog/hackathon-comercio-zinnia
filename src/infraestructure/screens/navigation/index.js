import React from 'react'
import { AuthContext } from '../../../domain/store/auth'
import { AppNavigator } from './app.navigator'
import { PublicNavigator } from './public.navigator'

export const Navigation = () => {
    const { authStore } = React.useContext(AuthContext)
    console.log(authStore)

    return (
        <>
            {
                authStore.isLogged ? <AppNavigator /> : <PublicNavigator />
            }
            {/* <AppNavigator /> */}
        </>

    )
}

