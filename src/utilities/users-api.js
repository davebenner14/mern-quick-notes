import sendRequest from "./send-request";
const BASE_URL = "/api/users";

export async function signUp(userData) {
  return sendRequest(BASE_URL, "POST", userData);
}

export async function login(userData) {
  return sendRequest(`${BASE_URL}/login`, "POST", userData);
}

export async function checkToken(token) {
  return sendRequest(`${BASE_URL}/check-token`);
}
