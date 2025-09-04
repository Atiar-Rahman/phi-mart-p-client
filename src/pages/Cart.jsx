import React, { Suspense, useEffect, useState } from 'react';
import useCartContext from '../hooks/useCartContext';
import CartItemList from '../components/Cart/CartItemList';

const Cart = () => {
    const { cart, createORGetCart, updateCartItemQuantity, deleteCartItems } =
      useCartContext();
    const [localCart,setLocalCart] = useState(cart);
    useEffect(()=>{
        // console.log("he")
        createORGetCart();

    },[createORGetCart])

    useEffect(()=>{
        setLocalCart(cart)
    },[cart])

    const handleUpdateQuantity =async(itemId,newQuantity)=>{
        const prevLocalCartCopy = localCart;
        // nested object update
        setLocalCart((prevLocalCart)=>(
            {...prevLocalCart,items:prevLocalCart.items.map(item=>item.id === itemId?{...item,quantity:newQuantity}:item)}
        ))
        try{
            await updateCartItemQuantity(itemId,newQuantity)
        }catch(err){
            console.log(err)
            setLocalCart(prevLocalCartCopy) // role back the previous state
        }
    }
    const handleRemoveItem = async(itemId)=>{
        const prevLocalCartCopy = localCart;
        setLocalCart((prevLocalCart)=>(
            {...prevLocalCart,items:prevLocalCart.items.filter(
                (item) =>item.id !== itemId)}
        ))
        try{
            await deleteCartItems(itemId)
        }catch(error){
            console.log(error)
            setLocalCart(prevLocalCartCopy);
        }   
    }

    return (
      <div className="flex justify-between">
        <div>
          <Suspense fallback={<p>Loadding....</p>}>
            <CartItemList
              items={localCart?.items || []} // ✅ match prop name
              handleUpdateQuantity={handleUpdateQuantity} // ✅ match prop name
              handleRemoveItem={handleRemoveItem}
            />
          </Suspense>
        </div>
        <div></div>
      </div>
    );
};

export default Cart;