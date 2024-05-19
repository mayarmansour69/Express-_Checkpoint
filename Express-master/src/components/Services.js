import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('/api/services')
      .then(response => response.json())
      .then(data => setServices(data));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="content">
        <h1>Our Services</h1>
        <ul>
          {services.map(service => (
            <li key={service.id}>{service.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Services;
