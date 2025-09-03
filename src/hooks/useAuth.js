import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useAuth = () => {
    const [user, setUser] = useState(null)
    const getToken = () => {
        const token = localStorage.getItem('authTokens');
        return token ? JSON.parse(token) : null;
    }
    const [authTokens, setAuthTokens] = useState(getToken())
    
    useEffect(()=>{
        fetchUserProfile()
    },[authTokens])



    // fetch user profile
    const fetchUserProfile = async()=>{
        try{
            const response = await apiClient.get('/auth/users/me',{
                headers:{Authorization: `JWT ${authTokens?.access}`}
            })
            // console.log(response.data)
            setUser(response.data)

        }catch(err){
            console.log("fetching err",err)
        }
    }

    // login user
    // here userData already object so, directly pass this object
    const loginUser = async (userData) => {
       try{
         const response = await apiClient.post('/auth/jwt/create/',userData)
        // console.log(response.data)
        setAuthTokens(response.data)
        localStorage.setItem("authTokens",JSON.stringify(response.data))


        // after login set user
        await fetchUserProfile();
       }catch(error){
        console.log("Login err",error.data?.response)
       }
    }
    return {user, loginUser}
}

export default useAuth;