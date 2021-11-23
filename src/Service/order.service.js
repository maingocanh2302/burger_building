import api from '../Api'
import { GOOGLE_API_URL, IDENTITY_KEY_LOCALSTORAGE } from '../Constant/order';

const order = async (data) => {
    const response = await api.postRequest(`${GOOGLE_API_URL}/orders.json`, data)
    localStorage.setItem(IDENTITY_KEY_LOCALSTORAGE, JSON.stringify(response));
    return true;
  }
  export default order;
  