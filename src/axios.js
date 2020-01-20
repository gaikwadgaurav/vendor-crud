import axios from 'axios';
const instance = axios.create({
    baseURL: 'http://localhost:192.168.1.5000',
    headers: {
        headerType: 'example header type'
    }
});

export default instance;
