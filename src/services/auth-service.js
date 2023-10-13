import axios from 'axios';


const API_URL = import.meta.env.VITE_API_BASE_URL;
console.log('URL de la API:', `${API_URL}/register`);
export async function register(name, email, password) {
    try {
        const response = await axios.post(`${API_URL}/api/register`, {
            name,
            email,
            password,
        }, {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        });

        console.log('Registro exitoso:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error en el registro:', error.response ? error.response.data : error);
        throw error;
    }
}

export async function login(email, password) {
    try {
        const response = await axios.post(`${API_URL}/api/login`, {
            email,
            password,
        });
        console.log('Inicio de sesión exitoso:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error en el inicio de sesión:', error.response ? error.response.data : error);
        throw error;
    }
}

export async function logout() {
    try {
        const response = await axios.post(`${API_URL}/api/logout`);
        console.log('Cierre de sesión exitoso:', response.data);
        return response.data;
    } catch (error) {
        console.error('Error en el cierre de sesión:',  error.response ? error.response.data : error);
        throw error;
    }
}
