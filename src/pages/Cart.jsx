import React, { useEffect } from 'react';
import useCartContext from '../hooks/useCartContext';

const Cart = () => {
    const { cart,createORGetCart } = useCartContext();

    useEffect(()=>{
        console.log("he")
        createORGetCart();
    },[createORGetCart])
    return (
        <div>
            {JSON.stringify(cart)}
        </div>
    );
};

export default Cart;