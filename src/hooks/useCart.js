/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import apiClient from '../services/api-client'
import authApiClient from '../services/auth-api-client';
const useCart = () => {
    const [authToken, setAuthToken] = useState(()=>JSON.parse(localStorage.getItem('authTokens')).access)
    const [cart,setCart] = useState(null)
    const [cardId,setCardId] = useState(()=>localStorage.getItem('cartId'))
    // create a new cart
    const createORGetCart = async()=>{
        try{
            const response = await authApiClient.post('/carts/',{})
            // console.log(response.data)
            if(!cardId){
                localStorage.setItem('cartId',response.data.id)
                setCardId(response.data.id)
            }
            setCart(response.data)
        }catch(err){
            console.log(err)
        }
    }

    // add item to the cart
    const AddCartItems = async(product_id,quantity)=>{
        if(!cardId){
            await createORGetCart()
        }
        try{
            const response = await authApiClient.post(`/carts/${cardId}/items/`,{product_id,quantity})
            return response.data
        }catch(err){
            console.log("error adding item",err)
        }
    }
    return {cardId,cart,createORGetCart,AddCartItems}
};

export default useCart;