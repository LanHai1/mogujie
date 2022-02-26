import axios from "axios";

const service = axios.create({
    baseURL: '/api',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8'
    },
    withCredentials: false
});

service.interceptors.request.use(
    config => {
        return config
    }
)

service.interceptors.response.use(
    response => {
        return response.data;
    }
)

export default service;