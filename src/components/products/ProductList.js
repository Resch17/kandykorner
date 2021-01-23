import React, { useContext, useEffect } from 'react';
import { ProductContext } from './ProductProvider';
import { Product } from './Product';
import './Product.css';

export const ProductList = () => {
  const { products, getProducts } = useContext(ProductContext);

  useEffect(() => {
    getProducts();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <h2>Products</h2>
      <div className="products">
        {products
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((p) => {
            return <Product key={p.id} product={p} />;
          })}
      </div>
    </>
  );
};
