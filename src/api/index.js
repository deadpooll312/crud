import axios from "axios";
import { TOKEN } from "../const/auth";
const baseURL = "http://192.168.0.110:8000/api/v1/";

const axiosInstance = axios.create({
  baseURL
});

axiosInstance.interceptors.request.use(
  async config => {
    const headers = {};
    try {
      const token = await localStorage.getItem(TOKEN);
      if (token) {
        headers["Authorization"] = `Token ${token}`;
      }
    } catch (e) {
      throw e;
    }
    config.headers = headers;

    return config;
  },
  error => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  response => response,
  ({response}) => {
    if (response && response.status === 403) {
      alert('Не достаточно прав');
    }

    if (response && response.data && response.status !== 403) {
      const {data} = response;
      const keys = Object.keys(data);
      alert(data[keys[0]]);
    }
    return Promise.reject(response);
  }
);

export default axiosInstance;
