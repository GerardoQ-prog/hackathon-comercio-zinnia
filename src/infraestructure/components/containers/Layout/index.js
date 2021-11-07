import React from 'react'
import { ScrollView } from 'react-native'
import { style } from './style'

const Layout = ({ color, ph, pv, children }) => {
    return (
        <ScrollView style={style(color, ph, pv).container}>
            {children}
        </ScrollView>
    )
}

export default Layout
