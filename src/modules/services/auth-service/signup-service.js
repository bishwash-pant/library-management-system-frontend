import { authUrls } from "../../shared/constants/urls/urls";
import httpClient from "../../interceptors/token-interceptor";

export function signupService(signUpCredentials, token) {
    return httpClient.post(`${authUrls.SIGNUP}/${token}`, signUpCredentials);
}
