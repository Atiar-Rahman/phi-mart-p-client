import React, { useEffect } from 'react';
import useCartContext from '../hooks/useCartContext';

const Cart = () => {
    const {createCart} = useCartContext()

    useEffect(()=>{
        createCart()
    },[])
    return (
        <div>
            this is 
        </div>
    );
};

export default Cart;