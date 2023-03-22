import Axios from 'axios';

import { apiBaseUrl } from './config';

const httpClient = Axios.create({
  baseURL: apiBaseUrl,
  timeout: 10000,
  maxContentLength: 10000,
  maxBodyLength: 10000,
});

// For GET requests
httpClient.interceptors.request.use(
  (configs) => {
    const token = sessionStorage.getItem('token') || localStorage.getItem('token') || '';

    if (token && configs.headers) {
      configs.headers.Authorization = `Bearer ${JSON.parse(token)}`;
    }
    return configs;
  },
  (err) => {
    return Promise.reject(err);
  },
);

const logout = () => {
  localStorage.clear();
  sessionStorage.clear();
  window.location.href = '/login';
};

httpClient.interceptors.response.use(
  (res) => res,
  (err) => {
    if (err?.response?.status === 401) {
      logout();
    }
    return Promise.reject(err);
  },
);

// For POST requests
// axiosBase.interceptors.response.use(
//   (res) => res,
//   (err) => {
//     const status = err.status || err.response.status;
//     // const configHttp = err.config;
//     // // Case refreshToken
//     // const refreshToken = Cookies.get('refreshToken');
//     // if (!refreshToken) {
//     //   logout();

//     //   return Promise.reject(err);
//     // }

//     // if (status !== 401) {
//     //   return Promise.reject(err);
//     // }
//     // Call API to get token
//     // if (config.BASE_URL) {
//     //   return Axios.post(config.BASE_URL, { refreshToken })
//     //     .then((response) => {
//     //       if (response.status === 200) {
//     //         Cookies.set('token', response.data.token);
//     //         configHttp.headers.Authorization = `Bearer ${response.data.token}`;

//     //         return Axios(configHttp);
//     //       } else {
//     //         logout();

//     //         return Promise.reject(err);
//     //       }
//     //     })
//     //     .catch(() => {
//     //       logout();
//     //       return Promise.reject(err);
//     //     });
//     // }
//   }
// );

export default httpClient;
