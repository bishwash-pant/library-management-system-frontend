import httpClient from "../../interceptors/token-interceptor";

export function getAllBooksService() {
    return httpClient.get('books/');
}
export function getMyBooksService() {
    return httpClient.get('books/my-books');
}
export function addBookService(body) {
    return httpClient.post('books/', body);
}
export function editBookService(id,body) {
    return httpClient.patch(`books/update/${id}`, body);
}
export function getBookDetailsService(id) {
    return httpClient.get(`/books/details/${id}`);
}
export function getBasicBookDetailsService(id) {
    return httpClient.get(`/books/details-basic/${id}`);
}
export function approveRequestService(id) {
    return httpClient.get(`/books/approve/${id}`);
}
export function rejectRequestService(id) {
    return httpClient.get(`/books/reject/${id}`);
}
export function deallocateBookService(id) {
    return httpClient.delete(`/books/unassign/${id}`);
}
export function deleteBookService(id) {
    return httpClient.delete(`/books/delete/${id}`);
}
export function myRequestedBooksService() {
    return httpClient.get(`/books/my-requests/`);
}
export function requestBookService(id) {
    return httpClient.get(`/books/my-requests/${id}`);
}
export function cancelBookRequestService(id) {
    return httpClient.delete(`/books/my-requests/${id}`);
}
export function returnBookService(id) {
    return httpClient.delete(`/books/return/${id}`);
}
export function getAllRequestsService() {
    return httpClient.get(`/books/requests`);
}
