import httpClient from "../../interceptors/token-interceptor";

export function getUnseenNotificationService() {
    return httpClient.get('notifications/unseen');
}
export function markNotificationAsSeenService(id) {
    return httpClient.delete(`notifications/seen/${id}`);
}
export function markAllNotificationAsSeenService(id) {
    return httpClient.delete(`notifications/seen-all`);
}