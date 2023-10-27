import axios from "axios";

export const api = axios.create({
    baseURL: 'https://api-livro.cyclic.app/livro'
})

export const apiLogin = axios.create({
    baseURL: 'https://api-login.cyclic.cloud'
});

export const createSession = async(usuario, senha) => {
    return api.post('https://api-login.cyclic.cloud/usuario', { usuario, senha})
}

export default api  ;