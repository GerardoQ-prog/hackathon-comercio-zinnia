import { authState, LOGIN, LOGOUT } from "./types";

const authReducer = (state = authState, action) => {
    switch (action?.type) {
        case LOGIN:
            return {
                ...state,
                isLogged: action.payload
            }
        case LOGOUT:
            return {
                ...state,
                isLogged: action.payload
            }
        default:
            break;
    }

}


export default authReducer