import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Login from './Components/Login';
import Register from './Components/Register';
import Profile from './Components/Profile';
import Books from './Components/Books';
import Category from './Components/Category';


function App() {
  const [isAuthenticated,setIsAuthenticated] = useState(false)
  useEffect(() => {
    const user = localStorage.getItem('user');
    if (user) {
      setIsAuthenticated(true);
    }
  }, []);


  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/category" element={<Category/>} />
         
          <Route path="/categories/:categoryId/" element={<Books />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
