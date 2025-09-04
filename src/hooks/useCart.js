/* eslint-disable no-unused-vars */

import React, { useCallback, useState } from 'react';
import apiClient from '../services/api-client'
import authApiClient from '../services/auth-api-client';
const useCart = () => {
    const [authToken, setAuthToken] = useState(()=>JSON.parse(localStorage.getItem('authTokens')).access)
    const [cart,setCart] = useState(null)
    const [cartId,setCartId] = useState(()=>localStorage.getItem('cartId'))
    // create a new cart
    const createORGetCart = useCallback(async()=>{
        try{
            const response = await authApiClient.post('/carts/',{})
            // console.log(response.data)
            if(!cartId){
                localStorage.setItem('cartId',response.data.id)
                setCartId(response.data.id)
            }
            setCart(response.data)
        }catch(err){
            console.log(err)
        }
    },[cartId])

    // add item to the cart
    const AddCartItems = useCallback(async(product_id,quantity)=>{
        if(!cartId){
            await createORGetCart()
        }
        try{
            const response = await authApiClient.post(`/carts/${cartId}/items/`,{product_id,quantity})
            return response.data
        }catch(err){
            console.log("error adding item",err)
        }
    },[cartId,createORGetCart])

    // update item quantity
    const updateCartItemQuantity = useCallback(async(itemId,quantity)=>{
        try{
            await authApiClient.patch(`/carts/${cartId}/items/${itemId}`,{quantity})
        }catch(err){
            console.log(err)
        }
    },[cartId])

    // delete cart item
    const deleteCartItems = useCallback(async(itemId)=>{
        try{
            await authApiClient.delete(`/carts/${cartId}/items/${itemId}/`)
        }catch(err){
            console.log(err)
        }
    },[cartId])
    return {cartId,cart,createORGetCart,AddCartItems,updateCartItemQuantity,deleteCartItems}
};

export default useCart;