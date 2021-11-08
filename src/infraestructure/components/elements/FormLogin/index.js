import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { Image, KeyboardAvoidingView, View } from 'react-native'
import { AuthContext } from '../../../../domain/store/auth'
import { authLogin } from '../../../../domain/store/auth/action'
import Images from '../../../assets/images/Images'
import { useForm } from '../../../hooks/useForm'
import { ButtonRegister, ButtonSecondary } from '../../ui/Buttons'
import { InputPassword, InputText } from '../../ui/Inputs'
import { styles } from './style'


const FormLogin = () => {

    const navigator = useNavigation();
    const { dispatchAuth } = React.useContext(AuthContext)
    const { form, onReset, onChange } = useForm({
        email: '',
        password: '',
    });


    const handlerViewRegister = () => navigator.navigate('Register')

    const handlerSubmit = () => {
        authLogin(dispatchAuth, form)
    }

    return (
        <KeyboardAvoidingView behavior="position">
            <View style={styles.container}>
                <Image source={Images.logo} style={{ marginLeft: 50 }} />
                <InputText label="Correo" value={form.email} onChangeText={onChange} name="email" />
                <InputPassword label="Contraseña" value={form.password} onChangeText={onChange} name="password" />
                <ButtonSecondary text="Iniciar sesión" onPress={handlerSubmit} />
                <ButtonRegister text="¿No tienes una cuenta?  Create una" onPress={handlerViewRegister} />
            </View>
        </KeyboardAvoidingView>

    )
}

export default FormLogin
