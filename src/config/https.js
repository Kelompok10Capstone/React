import axios from 'axios';

const api = axios.create({
  baseURL: 'http://34.101.78.228:2424/api/v1/'
//   baseURL: 'https://be-golang.kucinghitam.tech/api/v1'
});

api.interceptors.request.use(
	(config) => {
		const token = sessionStorage.getItem("Auth Token");
		config.headers.Authorization = `Bearer ${token}`;		
		return config;
		},
		(error) => {
		return Promise.reject(error);
	}
);

export default api;