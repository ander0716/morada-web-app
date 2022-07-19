const TOKEN = 'token_morada';

export const setToken = (value) => {
    localStorage.setItem(TOKEN, value);
}

export const getToken = () => {
    return localStorage.getItem(TOKEN);
}

export const removeToken = () => {
    localStorage.removeItem(TOKEN);
}