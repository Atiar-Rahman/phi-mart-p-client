
//  services folder only js


import axios from "axios";
const apiClient = axios.create({
    baseURL:'https://phi-mart-p-five.vercel.app/api/v1'
})

export default apiClient;
