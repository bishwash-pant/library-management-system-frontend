import axios from "axios";
import { environment } from "../../enviroment";
import toast from 'react-hot-toast';


export const httpClient = axios.create({
    baseURL: environment.baseUrl,
});


httpClient.interceptors.request.use(
    function (config) {
        const authToken = localStorage.getItem('auth-token');
        config.headers.Authorization = `Bearer ${authToken}`;
        config.url = `${environment.baseUrl}${config.url}`;
        console.log('interceptor');
        console.log(environment.baseUrl);
        return config;
    },
    function (error) {
        toast('Error');
        return Promise.reject(error);
    }
);

export default httpClient;
