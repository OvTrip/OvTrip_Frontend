import { apiInstance } from "./index.js";

const api = apiInstance();

async function createPlan(plan, success, fail) {
  let token = "Bearer " + sessionStorage.getItem("access-token");
  api.defaults.headers["Authorization"] = token;
  await api.post(`/plan`, JSON.stringify(plan)).then(success).catch(fail);
}

export { createPlan };
