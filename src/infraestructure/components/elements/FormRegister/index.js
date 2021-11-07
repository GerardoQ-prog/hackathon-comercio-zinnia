import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Image, KeyboardAvoidingView, ScrollView, View } from 'react-native'
import Images from '../../../assets/images/Images';
import { useForm } from '../../../hooks/useForm';
import { ButtonSecondary } from '../../ui/Buttons';
import { InputPassword, InputText } from '../../ui/Inputs'

const FormRegister = () => {

    const navigator = useNavigation();

    const { form, onReset, onChange } = useForm({
        dni: '',
        fullname: '',
        phone: '',
        email: '',
        password: ''
    });

    return (
        <KeyboardAvoidingView behavior="position">
            <ScrollView>
                <Image source={Images.logo} style={{ marginLeft: 30 }} />
                <InputText label="DNI" value={form.dni} onChangeText={onChange} name="email" />
                <InputText label="Nombre Completo" value={form.fullname} onChangeText={onChange} name="email" />
                <InputText label="Celular" value={form.phone} onChangeText={onChange} name="email" />
                <InputText label="Correo" value={form.email} onChangeText={onChange} name="email" />
                <InputPassword label="Contraseña" value={form.password} onChangeText={onChange} name="password" />
                <ButtonSecondary text="Registrarme" />
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default FormRegister
