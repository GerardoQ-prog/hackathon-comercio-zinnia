import { LOGIN } from "./types"

export const authLogin = (dispatch) => {
    dispatch({
        type: LOGIN,
        payload: true
    })
}


export const authLogout = (dispatch) => {
    dispatch({
        type: LOGIN,
        payload: false
    })
}