import { useState } from "react";
import apiClient from "../services/api-client";

const useAuth = () => {
    const [user, setUser] = useState(null)
    const getToken = () => {
        const token = localStorage.getItem('authTokens');
        return token ? JSON.parse(token) : null;
    }
    const [authTokens, setAuthTokens] = useState(getToken())

    // login user
    // here userData already object so, directly pass this object
    const loginUser = async (userData) => {
        const response = await apiClient.post('/auth/jwt/create/',userData)
        console.log(response.data)
    }
    return {user, loginUser}
}

export default useAuth;