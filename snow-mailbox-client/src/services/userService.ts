import http from "../http-common";
import IUsers from "../types/Users";

const token = localStorage.getItem("token");
const headers = { Authorization: `Bearer ${token}` };


const get = () => {
  return http.get("");
};

const login = (body: IUsers) => {
  return http.post("/auth/login", body);
};

const UserService = {
  get,
  login,
};

export default UserService;
