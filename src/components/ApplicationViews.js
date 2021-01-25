import React from 'react';
import { Route } from 'react-router-dom';
import { LocationProvider } from './locations/LocationProvider';
import { LocationList } from './locations/LocationList';
import { ProductProvider } from './products/ProductProvider';
import { ProductList } from './products/ProductList';
import { ProductTypeProvider } from './productTypes/ProductTypeProvider';
import { EmployeeProvider } from './employees/EmployeeProvider';
import { EmployeeList } from './employees/EmployeeList';
import { EmployeeForm } from './employees/EmployeeForm';
import { CustomerCandyProvider } from './products/CustomerCandyProvider';
import { MyOrder } from "./products/MyOrder";

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

      <CustomerCandyProvider>
        <ProductTypeProvider>
          <ProductProvider>
            <Route exact path="/products">
              <ProductList />
            </Route>
            <Route exact path="/order">
              <MyOrder />
            </Route>
          </ProductProvider>
        </ProductTypeProvider>
      </CustomerCandyProvider>

      <LocationProvider>
        <EmployeeProvider>
          <Route exact path="/employees">
            <EmployeeList />
          </Route>
          <Route exact path="/employees/create">
            <EmployeeForm />
          </Route>
        </EmployeeProvider>
      </LocationProvider>
    </>
  );
};
