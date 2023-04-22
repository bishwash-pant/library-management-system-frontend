import httpClient from "../../interceptors/token-interceptor";

export function changePasswordService(body) {
    return httpClient.patch('/auth/change-password', body);
}