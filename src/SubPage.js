
import React from 'react';
import { Link } from 'react-router-dom';

const SubPage = () => {
  return (
    <div>
      <h1>Subpage</h1>
      <p>This is the subpage.</p>
      <Link to="/">Go back to Main Page</Link>
    </div>
  );
};

export default SubPage;
