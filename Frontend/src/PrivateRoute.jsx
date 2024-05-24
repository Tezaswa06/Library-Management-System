import React from 'react';
import { Navigate } from 'react-router-dom';

function PrivateRoute({ isAuthenticated, children }) {
  if (!isAuthenticated) {
    console.log("isAuth",isAuthenticated);
    return <Navigate to="/" />;
  }
  return children;
}

export default PrivateRoute;
