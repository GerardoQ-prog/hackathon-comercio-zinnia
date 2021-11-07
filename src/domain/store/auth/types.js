export const authState = {
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

export const LOGIN = 'LOGIN'
export const LOGOUT = 'LOGOUT'
