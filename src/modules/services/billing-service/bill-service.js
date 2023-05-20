import httpClient from "../../interceptors/token-interceptor";

export function getAllUsersBillingsService() {
    return httpClient.get('billings/users');
}
export function getBooksBillingsService() {
    return httpClient.get('billings/books');
}