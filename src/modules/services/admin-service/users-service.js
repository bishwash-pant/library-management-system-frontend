import httpClient from "../../interceptors/token-interceptor";

export function getUsersService() {
    return httpClient.get('/admin/user');
}
export function getUsersAtPageService(url) {
    return httpClient.get(url);
}
export function deleteUsersService(userId) {
    return httpClient.delete(`/admin/user/${userId}`);
}
export function inviteUserService(inviteBody) {
    return httpClient.post('/admin/invite?skip=0', inviteBody);
}
export function invitedUsersService() {
    return httpClient.get('admin/invite?limit=9')
}
export function invitedUsersAtPageService(url) {
    return httpClient.get(url);
}
export function deleteInvitedUsersService(inviteId) {
    return httpClient.delete(`/admin/invite/${inviteId}`);
}