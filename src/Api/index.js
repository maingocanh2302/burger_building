import axios from 'axios';
import { identityKey } from '../Constant';

const postRequest = async (url, body, headers) => {
  return new Promise((resolve, reject) => {
    axios.post(`${url}?key=${identityKey}`, body, { headers }).then((data) => {
      resolve(data?.data);
    }).catch((err) => {
      reject(err?.response?.data)
    })
  })
}
const getRequest = async (url, query, headers)=>{
  query = {
    ...query,
    key : identityKey
  }
  const params = new URLSearchParams(query).toString()
  return new Promise((resolve, reject) => {
    axios.get(`${url}?${params}`, { headers }).then((data) => {
      resolve(data?.data);
    }).catch((err) => {
      reject(err?.response?.data)
    })
  })
}

export default {
  postRequest, 
  getRequest
}


