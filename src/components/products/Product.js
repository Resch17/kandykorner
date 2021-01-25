import React, { useContext } from 'react';
import { CustomerCandyContext } from './CustomerCandyProvider';
import './Product.css';

export const Product = ({ product, category }) => {
  const { addCustomerCandy } = useContext(CustomerCandyContext);

  const userId = parseInt(localStorage.getItem('kandy_customer'));

  const handleAddClick = () => {
    const newObject = {
      customerId: userId,
      productId: product.id,
    };

    addCustomerCandy(newObject);
  };

  return (
    <section className="product">
      <h3 className="product__name">{product.name}</h3>
      <div className="product__type">Category: {category.name}</div>
      <div className="product__price">Price: ${product.price.toFixed(2)}</div>
      <div className="product__itemNumber">Item # {product.id}</div>
      <div className="product__orderButton">
        <button id="orderButton" onClick={handleAddClick}>
          Add to Order
        </button>
      </div>
    </section>
  );
};
