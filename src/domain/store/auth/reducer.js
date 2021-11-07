import { authState, LOGIN, LOGOUT } from "./types";

const authReducer = (state = authState, action) => {
    switch (action?.type) {
        case LOGIN:
            return action.payload
        case LOGOUT:
            return {
                access_token: null,
                expired_date: null,
                expired_in: null,
                user: {
                    _id: null,
                    dni: null,
                    email: null,
                    fullName: null,
                    isBlocked: false,
                    phone: null,
                    updatedAt: null,
                },
            }

        default:
            break;
    }

}


export default authReducer