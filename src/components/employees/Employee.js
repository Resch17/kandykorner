import React from 'react';
import './Employee.css';

export const Employee = ({ employee, location }) => (
  <section className="employee">
    <h3 className="employee__name">{employee.name}</h3>
    <div className="employee__location">Store: {location.address}</div>
    <div className="employee__management">
      Management: {employee.isManager ? 'Yes' : 'No'}
    </div>
    <div className="employee__fullTime">
      Full time: {employee.isFullTime ? 'Yes' : 'No'}
    </div>
    <div className="employee__rate">
      Hourly rate: ${employee.hourlyRate.toFixed(2)}
    </div>
  </section>
);
