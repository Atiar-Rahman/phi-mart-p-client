
//  services folder only js


import axios from "axios";
const authApiClient = axios.create({
    baseURL:'https://phi-mart-p-five.vercel.app/api/v1'
})

export default authApiClient;

authApiClient.interceptors.request.use((config)=>{
    const token = localStorage.getItem('authTokens')
    if(token){
        config.headers.Authorization = `JWT ${JSON.parse(token)?.access}`
    }
    return config;

 },(error)=>Promise.reject(error))