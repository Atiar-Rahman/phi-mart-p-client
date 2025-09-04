import React, { Suspense, useEffect, useState } from 'react';
import useCartContext from '../hooks/useCartContext';
import CartItemList from '../components/Cart/CartItemList';

const Cart = () => {
    const { cart, createORGetCart, updateCartItemQuantity } = useCartContext();
    const [localCart,setLocalCart] = useState(cart);
    useEffect(()=>{
        // console.log("he")
        createORGetCart();

    },[createORGetCart])

    useEffect(()=>{
        setLocalCart(cart)
    },[cart])

    const handleUpdateQuantity =async(itemId,newQuantity)=>{
        // nested object update
        setLocalCart((prevLocalCart)=>(
            {...prevLocalCart,items:prevLocalCart.items.map(item=>item.id === itemId?{...item,quantity:newQuantity}:item)}
        ))
        try{
            await updateCartItemQuantity(itemId,newQuantity)
        }catch(err){
            console.log(err)
        }
    }

    return (
      <div className="flex justify-between">
        <div>
          <Suspense fallback={<p>Loadding....</p>}>
            <CartItemList
              items={localCart?.items || []} // ✅ match prop name
              handleUpdateQuantity={handleUpdateQuantity} // ✅ match prop name
            />
          </Suspense>
        </div>
        <div></div>
      </div>
    );
};

export default Cart;