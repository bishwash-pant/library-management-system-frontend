import httpClient from "../../interceptors/token-interceptor";

export function forgotPasswordService(body) {
  return httpClient.post("auth/forgot-password", body);
}
export function resetPasswordService(body, token) {
  return httpClient.post(`auth/reset-password/${token}`, body);
}
