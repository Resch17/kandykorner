import React, { useContext, useEffect } from 'react';
import { EmployeeContext } from './EmployeeProvider';
import { LocationContext } from '../locations/LocationProvider';
import { Employee } from './Employee';
import { useHistory } from 'react-router-dom';
import './Employee.css';

export const EmployeeList = () => {
  const { employees, getEmployees } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext);

  useEffect(() => {
    getLocations().then(getEmployees);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const history = useHistory();

  return (
    <>
      <h2>Employees</h2>
      <button
        onClick={() => {
          history.push('/employees/create');
        }}
      >
        Add Employee
      </button>
      <div className="employees">
        {employees
          .sort((a, b) => a.name.localeCompare(b.name))
          .map((e) => {
            const location = locations.find((l) => l.id === e.locationId);
            return <Employee key={e.id} employee={e} location={location} />;
          })}
      </div>
    </>
  );
};
