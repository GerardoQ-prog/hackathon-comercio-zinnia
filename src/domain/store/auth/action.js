import { Alert } from "react-native"
import { AuthRepository } from "../../../infraestructure/repositories/auth.repository"
import { LOGIN, LOGOUT } from "./types"

export const authLogin = async (dispatch, login) => {

    const response = await AuthRepository.postLogin(login)
    if (response.status === 200) {
        dispatch({
            type: LOGIN,
            payload: response.response.data
        })
    } else {
        Alert.alert(response.response.error.message)
    }

}


export const authLogout = (dispatch) => {
    dispatch({
        type: LOGOUT,
    })
}

export const authRegister = async (register, navigator) => {
    const response = await AuthRepository.postRegister(register)
    console.log(response)
    if (response.status === 201) {
        Alert.alert('Usuario registrado correctamente')
        navigator.navigate('Login')
    } else {
        Alert.alert(response.response.error.message)
    }
}