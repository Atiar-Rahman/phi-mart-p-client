import React, { useEffect } from 'react';
import useCartContext from '../hooks/useCartContext';

const Cart = () => {
    const { cart,createORGetCart } = useCartContext();

    useEffect(()=>{
        createORGetCart();
    },[])
    return (
        <div>
            {JSON.stringify(cart)}
        </div>
    );
};

export default Cart;