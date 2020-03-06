import axios from "axios";

axios.defaults.headers.common = {
  "Allow": "*",
  "Origin": "http://localhost:3000",
  "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers":
    "Origin, Content-Type, X-Auth-Token, Access-Control-Allow-Headers, Authorization, X-Requested-With",
  "Access-Control-Allow-Credentials": "true"
};

const get = url => axios.get(url);
const post = (url, body) => axios.post(url, body);

export default { get, post };
