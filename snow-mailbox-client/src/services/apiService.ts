import http from "../http-common";
import { IMailbox, IUsers } from "../types/Users";

const login = (body: IUsers) => {
  return http.post("/auth/login", body);
};

const getUser = () => {
  const headers = checkTocken();

  return http.get("/user", { headers });
};

const createMailbox = (data: IMailbox) => {
  const headers = checkTocken();
  return http.post("/mailbox", data, { headers });
};

const getMailbox = () => {
  const headers = checkTocken();
  return http.get("/mailbox", { headers });
};

const checkTocken = () => {
  const token = localStorage.getItem("token");
  return { Authorization: `Bearer ${token}` };
};

const ApiService = {
  getUser,
  login,
  createMailbox,
  getMailbox,
};

export default ApiService;
