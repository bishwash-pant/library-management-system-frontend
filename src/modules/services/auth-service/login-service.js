import { authUrls } from "../../shared/constants/urls/urls";
import httpClient from "../../interceptors/token-interceptor";

export function loginService(loginCredentials) {
  return httpClient.post(authUrls.LOGIN, loginCredentials);
}
