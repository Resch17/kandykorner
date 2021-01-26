import React, { useContext, useEffect } from 'react';
import { CustomerCandyContext } from './CustomerCandyProvider';
import { ProductContext } from './ProductProvider';
import { OrderItem } from './OrderItem';
import './Order.css';

export const MyOrder = () => {
  const { customerCandy, getCustomerCandy } = useContext(CustomerCandyContext);
  const { products, getProducts } = useContext(ProductContext);

  const userId = parseInt(localStorage.getItem('kandy_customer'));

  useEffect(() => {
    getProducts().then(getCustomerCandy);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const userPurchases = customerCandy.filter(
    (rel) => rel.customerId === userId
  );

  const uniqueProducts = Array.from([
    ...new Set(userPurchases.map((up) => up.productId)),
  ]);

  const purchaseHistory = uniqueProducts.map((up) =>
    userPurchases.filter((product) => product.productId === up)
  );

  const purchaseReadout = purchaseHistory.map((purchase) => {
    const product = products.find((p) => p.id === purchase[0].productId);
    const quantity = purchase.length;
    return (
      <OrderItem key={purchase[0].id} product={product} quantity={quantity} />
    );
  });

  const userProducts = userPurchases.map((up) => {
    return products.find((p) => p.id === up.productId);
  });

  const orderTotal = userProducts.reduce((a, b) => {
    return a + b.price;
  }, 0);

  return (
    <>
      <h2>My Order</h2>
      <div className="orders">
        <table className="orderTable">
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Price per item</th>
              <th>Quantity</th>
              <th>Cost</th>
            </tr>
          </thead>
          <tbody>{purchaseReadout}</tbody>
          <tfoot>
            <tr>
              <td colSpan="3"><b>Total purchase price:</b></td>
              <td>${orderTotal.toFixed(2)}</td>
            </tr>
          </tfoot>
        </table>
      </div>
    </>
  );
};
