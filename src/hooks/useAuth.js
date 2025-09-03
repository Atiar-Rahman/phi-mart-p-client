import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const useAuth = () => {
    const [user, setUser] = useState(null)
    const [errorMes,setErrorMes] = useState('')
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

    // update user profile
    const updateUserProfile=async(data)=>{
        setErrorMes("")
        try{
            await apiClient.patch('/auth/users/me/',data,{
                headers:{Authorization: `JWT ${authTokens?.access}`}
            })
        }
        catch(err){
            console.log(err)
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
    //  Registration user
    const registeruser = async(userData)=>{
        try{
            await apiClient.post('/auth/users/',userData)
            return {success:true,message:"Registration successful. check your email to activate your accounting Redirecting..."}
        }catch(err){
            console.log("register err", err)
            if(err.response && err.response.data){
                // field error show 
            const errorMessage = Object.values(err.response.data).flat().join('\n')
            setErrorMes(errorMessage)
            }else{
                setErrorMes("Registration faild.try again")
            }
            
        }
    }

    //logout user
    const logoutUser = ()=>{
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
    }

    return {user, errorMes, loginUser,registeruser,logoutUser,updateUserProfile}
}

export default useAuth;