import axios from 'axios';
import queryString from 'query-string';

const BASE_URL = 'http://localhost:8080/api/v1/';
const axiosClient = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    paramsSerializer: params => queryString.stringify(params)
});
axiosClient.interceptors.response.use((response) => {
    if (response && response.data) {
    return response.data;
    }
    return response;
    }, (error) => {
    // Handle errors
    throw error;
    });
export default axiosClient;

export const axiosPrivate = axios.create({
    baseURL: BASE_URL,
    headers: { 'Content-Type': 'application/json' },
    // withCredentials: true
});

axiosPrivate.interceptors.request.use(async (config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

axiosPrivate.interceptors.response.use((response) => {
    return response;
}, (error) => {
    if (error.response.status === 401) {
        localStorage.removeItem('token');
        window.location.href = '/login';
    }
    return Promise.reject(error);
});