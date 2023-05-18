import axios from "axios";
import { environment } from "../../enviroment";
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { setLoader, unsetLoader } from "../../state-management/reducers/loader-reducers";
import { useEffect, useState } from "react";
import { LoaderComponent } from "../shared/components/loader/loader";




const httpClient = axios.create({
    baseURL: environment.baseUrl,
});

export function Interceptor({ children }) {
    const [loadState, setLoadState] = useState(true);
    const dispatch = useDispatch();


    useEffect(() => {
        // dispatch(setLoader())
        httpClient.interceptors.request.use(
            function (config) {
                dispatch(setLoader());
                const authToken = localStorage.getItem('access-token');
                config.headers.Authorization = `Bearer ${authToken}`;
                config.url = `${config.url}`;
                return config;
            },
        );
        httpClient.interceptors.response.use(function (response) {
            dispatch(unsetLoader());
            return response;
        }, function (error) {
            dispatch(unsetLoader());
            toast.error(error?.response?.data?.message);
            return Promise.reject(error);
        });
        // dispatch(unsetLoader());
        setLoadState(false);

    }, []);






    { return loadState ? <LoaderComponent /> : children }

}
export default httpClient;

