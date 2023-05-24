import { apiInstance } from "./index.js";

const api = apiInstance();

async function kakaologin(code, success, fail) {
  await api.get(`/oauth/kakao?code=${code}`).then(success).catch(fail);
}

async function naverlogin(code, state, success, fail) {
  await api.get(`/oauth/naver?code=${code}&state=${state}`).then(success).catch(fail);
}

async function getUserInfo(success, fail) {
  let token = "Bearer " + sessionStorage.getItem("access-token");
  api.defaults.headers["Authorization"] = token;
  await api.get(`/user`).then(success).catch(fail);
}

async function tokenRegeneration(success, fail) {
  let token = "Bearer " + sessionStorage.getItem("refresh-token");
  api.defaults.headers["Authorization"] = token;
  await api.post(`/access-token/issue`).then(success).catch(fail);
}

async function logout(success, fail) {
  let token = "Bearer " + sessionStorage.getItem("access-token");
  api.defaults.headers["Authorization"] = token;
  await api.post(`/logout`).then(success).catch(fail);
}

// async function login(user, success, fail) {
//   await api.post(`/user/login`, JSON.stringify(user)).then(success).catch(fail);
// }

// async function findById(userid, success, fail) {
//   api.defaults.headers["access-token"] = sessionStorage.getItem("access-token");
//   await api.get(`/user/info/${userid}`).then(success).catch(fail);
// }

// async function tokenRegeneration(user, success, fail) {
//   api.defaults.headers["refresh-token"] =
//     sessionStorage.getItem("refresh-token"); //axios header에 refresh-token 셋팅
//   await api.post(`/user/refresh`, user).then(success).catch(fail);
// }

// async function logout(userid, success, fail) {
//   await api.get(`/user/logout/${userid}`).then(success).catch(fail);
// }

// export { login, findById, tokenRegeneration, logout };
export { kakaologin, naverlogin, getUserInfo, tokenRegeneration, logout };
