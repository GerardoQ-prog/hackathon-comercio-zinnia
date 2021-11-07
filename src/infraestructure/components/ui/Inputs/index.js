import React from 'react'
import { View, TextInput, Text } from 'react-native'
import { styles } from './style'

export const InputText = ({ onChangeText, value, label, name, placeholder = '', editable = true, keyboardType = 'default' }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                onChangeText={value => onChangeText(value, name)}
                value={value}
                placeholder={placeholder}
                editable={editable}
                keyboardType={keyboardType}
            />
        </View>
    )
}

export const InputPassword = ({ onChangeText, value, label, name, placeholder = '', editable = true, keyboardType = 'default' }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={styles.input}
                onChangeText={value => onChangeText(value, name)}
                value={value}
                placeholder={placeholder}
                editable={editable}
                keyboardType={keyboardType}
                secureTextEntry={true}
            />
        </View>
    )
}

export const InputMessage = ({ onChangeText, value, label, name, placeholder = '', editable = true, keyboardType = 'default' }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.labelPrimary}>{label}</Text>
            <TextInput
                style={styles.inputPrimary}
                onChangeText={value => onChangeText(value, name)}
                value={value}
                placeholder={placeholder}
                editable={editable}
                keyboardType={keyboardType}
            />
        </View>
    )
}


