import Helper from "../lib/helper";

import RequestManager from "./RequestManager";
import { baseUrl, loginUrl } from "../config/config";

const get = name => localStorage.getItem(name);
const set = (name, value) => localStorage.setItem(name, value);
const remove = name => localStorage.removeItem(name);

const login = async user =>
  Helper.Covenant(async () => {
    const currentUser = (await RequestManager.post(baseUrl + loginUrl, user))
      .data;
    set("username", currentUser.username);
    set("role", currentUser.role);
    return currentUser;
  });

const logout = () => {
  remove("username");
  remove("role");
};

const getUserName = () => get("username");
const getRole = () => get("role");

export default { login, logout, getUserName, getRole };
