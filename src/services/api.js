import axios from 'axios';

const api = axios.create({
    baseURL: "my-json-server.typicode.com/MarcosPCToledo/RocketShoes/blob/master/"
});

export default api;
