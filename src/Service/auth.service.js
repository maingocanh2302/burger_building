import api from '../Api';
import { GOOGLE_API_URL, IDENTITY_KEY_LOCALSTORAGE } from '../Constant';

const register = async (data) => {
  const response = await api.postRequest(`${GOOGLE_API_URL}/signupNewUser`, data)
  localStorage.setItem(IDENTITY_KEY_LOCALSTORAGE, JSON.stringify(response));
  return true;
}

export default {
  register,
};
