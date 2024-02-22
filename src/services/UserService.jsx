import axios from 'axios';
let baseUrl = "https://gramsahay-server-production-88a9.up.railway.app/users/";
class UserService { 
    getAllUsers(){
       return axios.get(baseUrl+"users")
    }
    getUserById(uid){
        return axios.get(baseUrl + "users/" + uid);
    }
    getUserByUsername(username){
        return axios.get(baseUrl + "user/" + username);
    }
    addUser(user){
        return axios.post(baseUrl + "users/", user);
    }
    updateUser(user){
        return axios.put(baseUrl + "users/", user);
    }
    deleteUser(uid){
        return axios.delete(baseUrl + "users/" + uid);
    }
}

export default new UserService();