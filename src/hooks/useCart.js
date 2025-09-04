
import React, { useState } from 'react';
import apiClient from '../services/api-client'
const useCart = () => {
    const [authToken, setAuthToken] = useState(()=>JSON.parse(localStorage.getItem('authTokens')).access)
    // create a new cart
    const createCart = async()=>{
        try{
            const response = await apiClient.post('/carts/',{},{headers:{Authorization: `JWT ${authToken}`}})
            console.log(response.data)
        }catch(err){
            console.log(err)
        }
    }
    return {createCart}
};

export default useCart;