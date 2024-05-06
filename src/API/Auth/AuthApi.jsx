import axiosClient from "../axiosClient"

class AuthApi {
    login = async (email, password) => {
        const url = '/auth/login';
        return axiosClient.post(url, { email, password });
    }

    register = async (displayName, email, password) => {
        const url = "/auth/register";
        return axiosClient.post(url, { displayName, email, password });
    }

    confirmEmail = async (email, token) => {
        const url = "/auth/confirm";
        return axiosClient.post(url, null, { params: { email, token } });
    }
}

export default new AuthApi();