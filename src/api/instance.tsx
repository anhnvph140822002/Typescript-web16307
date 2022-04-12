import axios from 'axios';

const instance = axios.create({
    baseURL: 'http://localhost:3001/api' 
    //khi chạy server thì đéo đky đnhap được
    // baseURL: 'http://localhost:3001/api' khi đky đnhap thì đéo lên server
});
export default instance;