import httpClient from "../../interceptors/token-interceptor";

export function getProfileService() {
    return httpClient.get(`auth/my-profile`);
}