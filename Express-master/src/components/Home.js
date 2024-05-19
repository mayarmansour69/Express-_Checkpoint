import React from 'react';
import Navbar from './Navbar';

function Home() {
  return (
    <div>
      <Navbar />
      <div className="content">
        <h1>Welcome to Our Website!</h1>
        <p>We offer a wide range of services to meet your needs.</p>
      </div>
    </div>
  );
}

export default Home;
