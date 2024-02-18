import axios from "axios";
let baseUrl = "http://3.110.188.118:8080/gramsevaks/";
class GramsevakService {
  getAllGramsevaks() {
    return axios.get(baseUrl + "gramsevaks");
  }
  getGramsevakById(gsid) {
    return axios.get(baseUrl + "gramsevaks/" + gsid);
  }
  getGramsevakByUsername(username) {
    return axios.get(baseUrl + "gramsevak/" + username);
  }
  addGramsevak(gramsevak) {
    return axios.post(baseUrl + "gramsevaks/" + gramsevak.gsid, gramsevak);
  }
  updateGramsevak(gramsevak) {
    return axios.put(baseUrl + "gramsevaks/" + gramsevak.gsid, gramsevak);
  }
  deleteGramsevak(gsid) {
    return axios.delete(baseUrl + "gramsevaks/" + gsid);
  }
}

export default new GramsevakService();
