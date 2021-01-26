import React, { useContext, useEffect } from 'react';
import { CustomerContext } from './CustomerProvider';
import { CustomerCandyContext } from '../products/CustomerCandyProvider';
import { Customer } from './Customer';
import './Customer.css';

export const CustomerList = () => {
  const { customers, getCustomers } = useContext(CustomerContext);
  const { customerCandy, getCustomerCandy } = useContext(CustomerCandyContext);

  useEffect(() => {
    getCustomers().then(getCustomerCandy);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const customersWithOrders = customers.map((c) => {
    const customerOrders = customerCandy.filter(
      (rel) => rel.customerId === c.id
    );
    return { ...c, orders: customerOrders.length };
  });

  return (
    <>
      <h2>Customers</h2>
      <div className="customers">
        {customersWithOrders
          .sort((a, b) => b.orders - a.orders)
          .map((c) => {
            return <Customer key={c.id} customer={c} />;
          })}
      </div>
    </>
  );
};
