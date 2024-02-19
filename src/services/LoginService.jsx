import axios from "axios";
let baseUrl = "http://gramshaybackend-production.up.railway.app/login/";
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
