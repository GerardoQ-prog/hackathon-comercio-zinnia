import { http } from '../http/fetch'

const url = 'https://prueba2.castillodetalentos.edu.pe/hackathon-comercio/api'

export const ConfigRepository = {
    getConfig: async token => {
        try {
            const response = await http.get(
                `${url}/config`,
                token
            );
            const status = response.status;
            const responseData = await response.json();
            return { response: responseData, status };
        } catch (err) {
            console.log('Error en getConfig', err);
            return {};
        }
    },
    postConfig: async (data, token) => {
        try {
            const response = await http.post(
                `${url}/config`,
                JSON.stringify(data),
                token
            );
            const status = response.status;
            const responseData = await response.json();
            return { response: responseData, status };
        } catch (err) {
            console.log('Error en postConfig', err);
            return {};
        }
    },
};
