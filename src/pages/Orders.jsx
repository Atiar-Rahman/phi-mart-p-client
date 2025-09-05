import React, { useEffect, useState } from "react";
import OrderCart from "../components/Orders/OrderCart";
import authApiClient from "../services/auth-api-client";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    authApiClient.get('/orders')
    .then(res=>{
      console.log(res.data)
      setOrders(res.data)
    })
  }, []);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-2xl font-bold py-3">Order Details</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order) => <OrderCart key={order.id} order={order} />)
      )}
    </div>
  );
};

export default Orders;
