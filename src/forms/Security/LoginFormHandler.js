import SecurityManager from "../../managers/SecurityManager";

const login = async user =>
  new Promise(async (resolve, reject) => {
    try {
      resolve(await SecurityManager.login(user));
    } catch (e) {
      reject(e);
    }
  });

export default { login };
