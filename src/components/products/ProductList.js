import React, { useContext, useEffect } from 'react';
import { ProductContext } from './ProductProvider';
import { ProductTypeContext } from '../productTypes/ProductTypeProvider';
import { Product } from './Product';
import './Product.css';

export const ProductList = () => {
  const { products, getProducts } = useContext(ProductContext);
  const { productTypes, getProductTypes } = useContext(ProductTypeContext);

  useEffect(() => {
    getProductTypes().then(getProducts);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <h2>Products</h2>
      <div className="products">
        {products
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((p) => {
            const category = productTypes.find((c) => c.id === p.productTypeId);
            return <Product key={p.id} product={p} category={category} />;
          })}
      </div>
    </>
  );
};
