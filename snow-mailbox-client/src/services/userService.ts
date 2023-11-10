import http from "../http-common";
import IUsers from "../types/Users";

const token = localStorage.getItem("token");
const headers = { Authorization: `Bearer ${token}` };



const login = (body: IUsers) => {
  return http.post("/auth/login", body);
};

const getUser = () => {
  return http.get("/user", { headers });
};

const UserService = {
  getUser,
  login,
};

export default UserService;
