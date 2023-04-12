import axios from "axios";
import { environment } from "../../enviroment";
import { toast } from 'react-toastify';




export const httpClient = axios.create({
    baseURL: environment.baseUrl,
});


httpClient.interceptors.request.use(
    function (config) {
        const authToken = localStorage.getItem('access-token');
        config.headers.Authorization = `Bearer ${authToken}`;
        config.url = `${environment.baseUrl}${config.url}`;
        return config;
    },
);
httpClient.interceptors.response.use(function (response) {
    response.data.message && toast(response.data.message);
    return response;
}, function (error) {
    toast.error(error?.response?.data?.message);
    return Promise.reject(error);
});

export default httpClient;
