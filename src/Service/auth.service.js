import api from '../Api';
import { GOOGLE_API_URL, IDENTITY_KEY_LOCALSTORAGE } from '../Constant/index';

const register = async (data) => {
  const response = await api.postRequest(`${GOOGLE_API_URL}/signupNewUser`, data)
  localStorage.setItem(IDENTITY_KEY_LOCALSTORAGE, JSON.stringify(response));
  return true;
}
const login = async(data)=>{
  const response = await api.postRequest(`${GOOGLE_API_URL}/verifyPassword`, data)
  localStorage.setItem(IDENTITY_KEY_LOCALSTORAGE, JSON.stringify(response));
  return JSON.stringify(response);
}
export default {
  register,
  login
};

