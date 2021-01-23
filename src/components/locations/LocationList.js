import React, { useContext, useEffect } from 'react';
import { LocationContext } from './LocationProvider';
import { Location } from './Location';
import './Location.css';

export const LocationList = () => {
  const { locations, getLocations } = useContext(LocationContext);

  useEffect(() => {
    getLocations();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <h2>Locations</h2>
      <div className="locations">
        {locations.map((l) => {
          return <Location key={l.id} location={l} />;
        })}
      </div>
    </>
  );
};
