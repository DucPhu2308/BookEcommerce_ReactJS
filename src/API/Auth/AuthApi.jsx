import baseURL from "../BaseURL"
import axiosClient from "../axiosClient"

class AuthApi {
    login = async (email, password) => {
        const url = '/auth/login';
        return axiosClient.post(url, { email, password });
    }
}

export default new AuthApi();