import httpClient from "../../interceptors/token-interceptor";

export function getMyBooksService() {
    return httpClient.get('books/my-books');
}