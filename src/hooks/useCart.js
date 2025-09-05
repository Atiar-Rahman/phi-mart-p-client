import React, { useCallback, useEffect, useState } from 'react';
import authApiClient from '../services/auth-api-client';

const useCart = () => {
  const [cart, setCart] = useState(null);
  const [cartId, setCartId] = useState(() => localStorage.getItem('cartId'));

  // Create or get existing cart
  const createOrGetCart = useCallback(async () => {
    try {
      let currentCartId = localStorage.getItem('cartId');

      if (currentCartId) {
        // Fetch existing cart
        const response = await authApiClient.get(`/carts/${currentCartId}/`);
        setCart(response.data);
        setCartId(currentCartId);
        return response.data;
      } else {
        // Create new cart
        const response = await authApiClient.post('/carts/');
        const newCartId = response.data.id;
        localStorage.setItem('cartId', newCartId);
        setCartId(newCartId);
        setCart(response.data);
        return response.data;
      }
    } catch (err) {
      console.error('Error in createOrGetCart:', err.response?.data || err.message);
    }
  }, []);

  // Add item to cart
  const addCartItems = useCallback(
    async (product_id, quantity) => {
      try {
        if (!cartId) {
          await createOrGetCart();
        }
        const response = await authApiClient.post(`/carts/${cartId}/items/`, { product_id, quantity });
        setCart(response.data); // update cart state after adding
        return response.data;
      } catch (err) {
        console.error('Error adding item to cart:', err.response?.data || err.message);
      }
    },
    [cartId, createOrGetCart]
  );

  // Update cart item quantity
  const updateCartItemQuantity = useCallback(
    async (itemId, quantity) => {
      try {
        await authApiClient.patch(`/carts/${cartId}/items/${itemId}/`, { quantity });
        // Refetch cart after update
        const updatedCart = await authApiClient.get(`/carts/${cartId}/`);
        setCart(updatedCart.data);
      } catch (err) {
        console.error('Error updating cart item quantity:', err.response?.data || err.message);
      }
    },
    [cartId]
  );

  // Delete cart item
  const deleteCartItems = useCallback(
    async (itemId) => {
      try {
        await authApiClient.delete(`/carts/${cartId}/items/${itemId}/`);
        // Refetch cart after deletion
        const updatedCart = await authApiClient.get(`/carts/${cartId}/`);
        setCart(updatedCart.data);
      } catch (err) {
        console.error('Error deleting cart item:', err.response?.data || err.message);
      }
    },
    [cartId]
  );

  // Initialize cart on mount
  useEffect(() => {
    createOrGetCart();
  }, [createOrGetCart]);

  return { cartId, cart, createOrGetCart, addCartItems, updateCartItemQuantity, deleteCartItems };
};

export default useCart;
