import React, { useContext, useEffect, useState } from 'react';
import { CustomerCandyContext } from './CustomerCandyProvider';
import { ProductContext } from './ProductProvider';
import { OrderItem } from './OrderItem';

export const MyOrder = () => {
  const { customerCandy, getCustomerCandy } = useContext(CustomerCandyContext);
  const { products, getProducts } = useContext(ProductContext);

  const userId = parseInt(localStorage.getItem('kandy_customer'));

  const [yourOrders, setYourOrders] = useState([]);

  useEffect(() => {
    getProducts()
      .then(getCustomerCandy)
      .then(() => {
        const customerOrders = customerCandy.filter(
          (rel) => rel.customerId === userId
        );
        setYourOrders(customerOrders);
      });
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <h2>My Order</h2>
      <div className="orders">
        {yourOrders.map((rel) => {
          const product = products.find((p) => p.id === rel.productId);
          return <OrderItem key={rel.id} product={product} />;
        })}
      </div>
    </>
  );
};
