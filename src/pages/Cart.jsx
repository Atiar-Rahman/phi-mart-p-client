import React, { Suspense, useEffect } from 'react';
import useCartContext from '../hooks/useCartContext';
import CartItemList from '../components/Cart/CartItemList';

const Cart = () => {
    const { cart, createORGetCart, updateCartItemQuantity } = useCartContext();

    useEffect(()=>{
        // console.log("he")
        createORGetCart();
    },[createORGetCart])

    const handleUpdateQuantity =async(itemId,newQuantity)=>{
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
              items={cart?.items || []} // ✅ match prop name
              handleCartItemQuantity={handleUpdateQuantity} // ✅ match prop name
            />
          </Suspense>
        </div>
        <div></div>
      </div>
    );
};

export default Cart;