import axios from "axios";
let baseUrl = "https://gramsahay-server-production-88a9.up.railway.app/gramsevaks/";
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
    return axios.post(baseUrl + "gramsevaks/" , gramsevak);
  }
  updateGramsevak(gramsevak) {
    return axios.put(baseUrl + "gramsevaks/" + gramsevak.gsid, gramsevak);
  }
  deleteGramsevak(gsid) {
    return axios.delete(baseUrl + "gramsevaks/" + gsid);
  }
}

export default new GramsevakService();
