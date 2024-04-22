import baseURL from "../BaseURL"
import axiosClient from "../axiosClient"

class AuthApi {
    login = async (email, password) => {
        const url = '/auth/login';
        return axiosClient.post(url, { email, password });
    }

    register = async (userName, email, password) => {
        const url = "/auth/register";
        return axiosClient.post(url, { userName, email, password });
    }
}

export default new AuthApi();