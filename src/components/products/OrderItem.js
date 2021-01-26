import React from 'react';
import './Order.css'

export const OrderItem = ({ product, quantity }) => {
  return (
    <tr className="order-item">
      <td className="order-item__name">{product.name}</td>
      <td className="order-item__price">${product.price.toFixed(2)}</td>
      <td className="order-item__quantity">{quantity}</td>
      <td className="order-item__total">${(quantity * product.price).toFixed(2)}</td>
    </tr>
  );
};
