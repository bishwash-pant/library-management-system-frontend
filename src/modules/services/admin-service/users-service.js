import httpClient from "../../interceptors/token-interceptor";

export function getUsersService() {
    return httpClient.get('/admin/user');
}
export function inviteUserService(inviteBody) {
    return httpClient.post('/admin/invite', inviteBody);
}
export function invitedUsersService() {
    return httpClient.get('admin/invite')
}
export function deleteInvitedUsersService(inviteId) {
    return httpClient.delete(`/admin/invite/${inviteId}`);
}