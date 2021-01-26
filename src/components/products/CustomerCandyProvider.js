import React, { useState, createContext } from 'react';

export const CustomerCandyContext = createContext();

export const CustomerCandyProvider = (props) => {
  const [customerCandy, setCustomerCandy] = useState([]);

  const getCustomerCandy = () => {
    return fetch('http://localhost:8088/customercandy?_expand=product')
      .then((res) => res.json())
      .then(setCustomerCandy);
  };

  const addCustomerCandy = (obj) => {
    return fetch('http://localhost:8088/customercandy', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    }).then(getCustomerCandy);
  };

  return (
    <CustomerCandyContext.Provider
      value={{ customerCandy, getCustomerCandy, addCustomerCandy }}
    >
      {props.children}
    </CustomerCandyContext.Provider>
  );
};
