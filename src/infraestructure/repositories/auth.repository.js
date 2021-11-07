import { http } from '../http/fetch'

const url = 'https://prueba2.castillodetalentos.edu.pe/hackathon-comercio/api'

export const AuthRepository = {
    postLogin: async data => {
        try {
            const response = await http.post(
                `${url}/auth/sign_in`,
                JSON.stringify(data),
            );
            const status = response.status;
            const responseData = await response.json();
            return { response: responseData, status };
        } catch (err) {
            console.log('Error en postLogin', err);
            return {};
        }
    },
    postRegister: async data => {
        try {
            const response = await http.post(
                `${url}/auth/sign_up`,
                JSON.stringify(data),
            );
            const status = response.status;
            const responseData = await response.json();
            return { response: responseData, status };
        } catch (err) {
            console.log('Error en postLogin', err);
            return {};
        }
    },

};
