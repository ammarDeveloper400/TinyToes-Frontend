import axios from 'axios';
import { BASE_URL } from '../config/constants';

export const axiosInstance = (baseURL:string, token = '') => {
  return axios.create({
    baseURL: `${BASE_URL}/${baseURL}`, 
    headers: {
      'Content-Type': 'application/json', 
      ...(token && { 'Authorization': `Bearer ${token}` }), 
    },
  });
};
