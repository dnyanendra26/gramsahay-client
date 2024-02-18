import axios from "axios";
let baseUrl = "http://3.110.188.118:8080/login/";
class LoginService {
  adminLogin(admin) {
    return axios.post(baseUrl + "admin", admin);
  }
  userLogin(user) {
    return axios.post(baseUrl + "user", user);
  }
  gramsevakLogin(gramsevak) {
    return axios.post(baseUrl + "gramsevak", gramsevak);
  }
}

export default new LoginService();
