import React from 'react';
import './Location.css';

export const Location = ({ location }) => (
  <section className="location">
    <h3 className="location__address">{location.address}</h3>
    <div className="location__size">Size: {location.sqFt} square feet</div>
    <div className="location__accessible">Handicap accessible: {location.isHandicapAccessible ? 'Yes' : 'No'}</div>
  </section>
)
