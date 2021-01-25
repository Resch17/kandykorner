import React from 'react';
import { Route } from 'react-router-dom';
import { LocationProvider } from './locations/LocationProvider';
import { LocationList } from './locations/LocationList';
import { ProductProvider } from './products/ProductProvider';
import { ProductList } from './products/ProductList';
import { ProductTypeProvider } from './productTypes/ProductTypeProvider';

export const ApplicationViews = () => {
  return (
    <>
      <LocationProvider>
        <Route exact path="/locations">
          <LocationList />
        </Route>
        <Route exact path="/">
          <LocationList />
        </Route>
      </LocationProvider>
      
      <ProductTypeProvider>
        <ProductProvider>
          <Route exact path="/products">
            <ProductList />
          </Route>
        </ProductProvider>
      </ProductTypeProvider>
    </>
  );
};
