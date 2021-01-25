import React, { useContext, useEffect, useState } from 'react';
import { EmployeeContext } from './EmployeeProvider';
import { LocationContext } from '../locations/LocationProvider';
import './Employee.css';
import { useHistory } from 'react-router-dom';

export const EmployeeForm = () => {
  const { addEmployee } = useContext(EmployeeContext);
  const { locations, getLocations } = useContext(LocationContext);

  const [employee, setEmployee] = useState({
    name: '',
    locationId: 0,
    isManager: false,
    isFullTime: false,
    hourlyRate: '',
  });

  const history = useHistory();

  useEffect(() => {
    getLocations();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleControlledInputChange = (evt) => {
    const newEmployee = { ...employee };
    let selectedVal = evt.target.value;

    if (evt.target.id.includes('Id')) {
      selectedVal = parseInt(selectedVal);
    }

    if (evt.target.id.startsWith('is')) {
      if (evt.target.checked) {
        selectedVal = true;
      } else {
        selectedVal = false;
      }
    }

    if (evt.target.id === 'hourlyRate') {
      if (evt.target.value !== '') {
        selectedVal = parseFloat(selectedVal);
      }
    }

    if (evt.target.id.startsWith('is')) {
      if (selectedVal === 'false') {
        selectedVal = false;
      } else if (selectedVal === 'true') {
        selectedVal = true;
      }
    }

    newEmployee[evt.target.id] = selectedVal;
    setEmployee(newEmployee);
  };

  const handleClickSaveEmployee = (evt) => {
    evt.preventDefault();

    const locationId = parseInt(employee.locationId);

    if (locationId === 0) {
      window.alert('Please fill in all fields');
    } else {
      addEmployee(employee).then(() => history.push('/employees'));
    }
  };

  return (
    <form className="employeeForm">
      <h2 className="employeeForm__title">New Employee</h2>
      <fieldset>
        <div className="form-group">
          <label htmlFor="name">Employee name:</label>
          <input
            type="text"
            id="name"
            onChange={handleControlledInputChange}
            required
            autoComplete="off"
            autoFocus
            className="form-control"
            placeholder="Employee name"
            value={employee.name}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="location">Employee location:</label>
          <select
            defaultValue={employee.locationId}
            onChange={handleControlledInputChange}
            name="location"
            id="locationId"
            className="form-control"
          >
            <option value="0">Select a location</option>
            {locations.map((l) => (
              <option key={l.id} value={l.id}>
                {l.address}
              </option>
            ))}
          </select>
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="hourlyRate">Hourly rate:</label>
          <input
            type="number"
            id="hourlyRate"
            onChange={handleControlledInputChange}
            required
            autoComplete="off"
            className="form-control"
            placeholder="$XX.XX"
            value={employee.hourlyRate}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="isManager">Check if employee is a manager</label>
          <input
            type="checkbox"
            id="isManager"
            onClick={handleControlledInputChange}
            className="form-control"
            value={employee.isManager}
          />
        </div>
      </fieldset>
      <fieldset>
        <div className="form-group">
          <label htmlFor="isFullTime">Check if employee is full-time</label>
          <input
            type="checkbox"
            id="isFullTime"
            onClick={handleControlledInputChange}
            className="form-control"
            value={employee.isFullTime}
          />
        </div>
      </fieldset>
      <button className="btn btn-primary" onClick={handleClickSaveEmployee}>
        Save Employee
      </button>
    </form>
  );
};
