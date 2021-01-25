import React from 'react';

export const OrderItem = ({ product }) => {
  return (
    <section className="order-item">
      <h4 className="order-item__name">Product: {product.name}</h4>
      <div className="order-item__category">
        Category: {product.productType.name}
      </div>
      <div className="order-item__price">
        Price: ${product.price.toFixed(2)}
      </div>
    </section>
  );
};
