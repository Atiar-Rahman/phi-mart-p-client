
import React from 'react';
import apiClient from '../services/api-client'
const useCart = () => {
    // create a new cart
    const createCart = async()=>{
        try{
            const response = await apiClient.post('/carts/')
            console.log(response.data)
        }catch(err){
            console.log(err)
        }
    }
    return {createCart}
};

export default useCart;