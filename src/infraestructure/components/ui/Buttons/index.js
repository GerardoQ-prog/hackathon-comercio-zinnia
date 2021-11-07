import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from './style'

export const ButtonSecondary = ({ onPress, text }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.appButtonContainer} activeOpacity={0.8} >
            <Text style={styles.appButtonText}>{text}</Text>
        </TouchableOpacity>

    )
}

export const ButtonRegister = ({ onPress, text }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.appButtonRegister} activeOpacity={0.8}>
            <Text style={styles.appButtonTextRegister}>{text}</Text>
        </TouchableOpacity>

    )
}

export const ButtonPrimary = ({ onPress, text, onLongPress }) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.appButtonPrimary} activeOpacity={0.8} onLongPress={onLongPress}>
            <Text style={styles.appButtonTextPrimary}>{text}</Text>
        </TouchableOpacity>

    )
}
