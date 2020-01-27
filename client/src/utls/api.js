import axios from 'axios';

export const getToken = () =>{
    return localStorage.getItem('token')
};

const api = () => {
    return axios.create({
        baseURL: 'http://localhost:5000',
        headers: {
            Authorization: getToken(),
        }
    })
};

export default api;