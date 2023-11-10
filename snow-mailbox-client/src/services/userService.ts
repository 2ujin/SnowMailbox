import http from "../http-common";
import IUsers from "../types/Users";

const get = () => {
  return http.get("");
};

const login = (body: IUsers) => {
  return http.post("/users/login", body);
};

const UserService = {
  get,
  login,
};

export default UserService;
