import React, { useContext } from 'react';
import { EmployeeContext } from './EmployeeProvider';
import { useHistory } from 'react-router-dom';
import './Employee.css';

export const Employee = ({ employee, location }) => {
  const { fireEmployee } = useContext(EmployeeContext);

  const history = useHistory();

  const handleFiring = (id) => {
    fireEmployee(id).then(() => {
      history.push('/employees');
    });
  };

  return (
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
      <button
        onClick={() => {
          handleFiring(employee.id);
        }}
      >
        Fire Employee
      </button>
    </section>
  );
};
