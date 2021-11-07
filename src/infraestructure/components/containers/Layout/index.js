import React from 'react'
import { ScrollView } from 'react-native'
import { style } from './style'

const Layout = ({ color, children }) => {
    return (
        <ScrollView style={style(color).container}>
            {children}
        </ScrollView>
    )
}

export default Layout
