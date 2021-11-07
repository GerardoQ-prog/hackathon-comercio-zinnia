import { useNavigation } from '@react-navigation/core';
import React from 'react'
import { Image, KeyboardAvoidingView, ScrollView, View } from 'react-native'
import { authRegister } from '../../../../domain/store/auth/action';
import Images from '../../../assets/images/Images';
import { useForm } from '../../../hooks/useForm';
import { ButtonSecondary } from '../../ui/Buttons';
import { InputPassword, InputText } from '../../ui/Inputs'
import { styles } from './style';

const FormRegister = () => {

    const navigator = useNavigation();

    const { form, onReset, onChange } = useForm({
        dni: '',
        fullName: '',
        phone: '',
        email: '',
        password: ''
    });

    const handlerRegister = () => authRegister(form, navigator)

    return (
        <KeyboardAvoidingView behavior="height">
            <View style={styles.container}>
                <Image source={Images.logo} style={{ marginLeft: 30 }} />
                <InputText label="DNI" value={form.dni} onChangeText={onChange} name="dni" />
                <InputText label="Nombre Completo" value={form.fullName} onChangeText={onChange} name="fullName" />
                <InputText label="Celular" value={form.phone} onChangeText={onChange} name="phone" />
                <InputText label="Correo" value={form.email} onChangeText={onChange} name="email" />
                <InputPassword label="Contraseña" value={form.password} onChangeText={onChange} name="password" />
                <ButtonSecondary text="Registrarme" onPress={handlerRegister} />
            </View>
        </KeyboardAvoidingView>
    )
}

export default FormRegister
