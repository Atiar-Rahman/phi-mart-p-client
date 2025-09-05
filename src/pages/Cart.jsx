import React, { Suspense, useEffect, useState } from "react";
import useCartContext from "../hooks/useCartContext";
import CartItemList from "../components/Cart/CartItemList";
import CartSummary from "../components/Cart/CartSummary";

const Cart = () => {
  const {
    cartId,cart,
    createOrGetCart,
    updateCartItemQuantity,
    deleteCartItems,
  } = useCartContext();
  const [localCart, setLocalCart] = useState(cart);
  // console.log(localCart)
  useEffect(() => {
    // console.log("he")
    createOrGetCart();
  }, [createOrGetCart]);

  useEffect(() => {
    setLocalCart(cart);
  }, [cart]);

  const handleUpdateQuantity = async (itemId, newQuantity) => {
    const prevLocalCartCopy = localCart;

    // nested object update
    setLocalCart((prevLocalCart) => {
      const updatedItems = prevLocalCart.items.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity: newQuantity,
              total_price: item.product.price * newQuantity,
            }
          : item
      );

      return {
        ...prevLocalCart,
        items: updatedItems,
        total_price: updatedItems.reduce(
          (sum, item) => sum + item.total_price,
          0
        ),
      };
    });
    try {
      await updateCartItemQuantity(itemId, newQuantity);
    } catch (err) {
      console.log(err);
      setLocalCart(prevLocalCartCopy); // role back the previous state
    }
  };
  const handleRemoveItem = async (itemId) => {
    const prevLocalCartCopy = localCart;
    setLocalCart((prevLocalCart) => {
        const updatedItems = prevLocalCart.items.filter((item) => item.id !== itemId)
        return {
          ...prevLocalCart,
          items: updatedItems,
          total_price:updatedItems.reduce((sum,item)=>sum+item.total_price,0)
        };
    });
    try {
      await deleteCartItems(itemId);
    } catch (error) {
      console.log(error);
      setLocalCart(prevLocalCartCopy);
    }
  };

  return (
    <div className="container mx-auto px-4 py-5">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <Suspense fallback={<p>Loadding....</p>}>
            <CartItemList
              items={localCart?.items || []} // ✅ match prop name
              handleUpdateQuantity={handleUpdateQuantity} // ✅ match prop name
              handleRemoveItem={handleRemoveItem}
            />
          </Suspense>
        </div>
        <div>
          <CartSummary
            totalPrice={localCart?.total_price || 0}
            itemCount={localCart?.items?.length || 0}
            cartId={cartId}
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
