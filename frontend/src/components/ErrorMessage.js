import React from 'react';
import { Link } from 'react-router-dom';

const ErrorMessage = () => {
  return (
    <div className="error-message">
      <p>
        You don't have permission to see this. Please log in before proceeding.
      </p>
      <Link to="/">Log in</Link>
    </div>
  );
};

export default ErrorMessage;
