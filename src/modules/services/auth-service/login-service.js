import axios from "axios";
import { environment } from "../../../enviroment";
import { authUrls } from "../../shared/constants/urls/urls";

export function loginService(loginCredentials) {
  return axios.post(environment.baseUrl + authUrls.LOGIN, loginCredentials);
}
