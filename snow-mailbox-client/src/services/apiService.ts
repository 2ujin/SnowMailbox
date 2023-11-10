import http from "../http-common";
import { IMailbox, IUsers } from "../types/Users";

const token = localStorage.getItem("token");
const headers = { Authorization: `Bearer ${token}` };

const login = (body: IUsers) => {
  return http.post("/auth/login", body);
};

const getUser = () => {
  return http.get("/user", { headers });
};

const createMailbox = (data: IMailbox) => {
  return http.post("/mailbox", data, { headers });
};

const ApiService = {
  getUser,
  login,
  createMailbox,
};

export default ApiService;
