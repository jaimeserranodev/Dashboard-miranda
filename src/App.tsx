import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { PrivateRoute } from './router/private.Route';
import Home from './pages/home/Home';
import Booking from './pages/booking/Booking';
import Contact from './pages/contact/Contact';
import Rooms from './pages/rooms/Rooms';
import Users from './pages/users/Users';
import Login from './pages/login/Login';

function App() {
  return (
    
      <BrowserRouter>
        <div className="App">
        <AuthProvider>
          
                  <Routes>
                      <Route  path="/" element={<Login/>} />
                        <Route element={<PrivateRoute />} >
                          <Route path="/home" element={<Home />} />
                          <Route path="/Booking" element={<Booking />} />
                          <Route path="/Contact" element={<Contact />} />
                          <Route path="/Rooms" element={<Rooms />} />
                          <Route path="/Users" element={<Users />} />
                        </Route>
                      
                  </Routes>
                </AuthProvider>
        </div>
      </BrowserRouter>
    
  );
}
export default App;