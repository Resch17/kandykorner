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


  // get all CustomerCandy relationships for this user
  const userPurchases = customerCandy.filter(
    (rel) => rel.customerId === userId
  );

  // make an array of each unique product purchased (Set prevents duplicate values)
  const uniqueProducts = Array.from([
    ...new Set(userPurchases.map((up) => up.productId)),
  ]);

  // for each unique product, find all the instances (relationships) of this user purchasing it
  const purchaseHistory = uniqueProducts.map((up) =>
    userPurchases.filter((product) => product.productId === up)
  );

  // match up each relationship of unique products, get the name of the product from its Id and the number purchased of each and return a table row (OrderItem)
  const purchaseReadout = purchaseHistory.map((purchase) => {
    const product = products.find((p) => p.id === purchase[0].productId);
    const quantity = purchase.length;
    return (
      <OrderItem key={purchase[0].id} product={product} quantity={quantity} />
    );
  });

  // make an array of all the products purchased by this user (including duplicates)
  const userProducts = userPurchases.map((up) => {
    return products.find((p) => p.id === up.productId);
  });

  // find the sum of all products purchased by this user
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
