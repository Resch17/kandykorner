import React from 'react';
import './Product.css';

export const Product = ({ product, category }) => {
  return (
    <section className="product">
      <h3 className="product__name">{product.name}</h3>
      <div className="product__type">Category: {category.name}</div>
      <div className="product__price">Price: ${product.price.toFixed(2)}</div>
      <div className="product__itemNumber">Item # {product.id}</div>
    </section>
  );
};
