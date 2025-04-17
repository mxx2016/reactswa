// MainPage.js
import React from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  return (
    <div>
      <h1>Main Page</h1>
      <p>Welcome to the main page!</p>
      <Link to="/subpage">Go to Subpage</Link>
    </div>
  );
};

export default MainPage;
