import React from 'react';
import { useLocation } from 'react-router-dom';

const Aboutus = () => {
  const location = useLocation();
  return (
    <div >
      <h3>About Us</h3>
      <p>Welcome to our website! We are dedicated to providing high-quality products and services to our customers.</p>
      <p>Our mission is to make shopping online easy and enjoyable for everyone. We strive to offer a wide range of products, excellent customer service, and fast delivery.</p>
      <p>If you have any questions or feedback, please don't hesitate to contact us. We're here to help!</p>
    </div>
  );
};

export default Aboutus;
