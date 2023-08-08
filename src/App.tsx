import './App.css';
import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { PrivateRoute } from './router/private.Route';
import Home from './pages/home/Home';
import Booking from './pages/booking/Booking';
import Contact from './pages/contact/Contact';
import ContactCreate from './pages/contact/ContactCreate';
import ContactUpdate from './pages/contact/ContactUpdate';
import Rooms from './pages/rooms/Rooms';
import RoomUpdate from './pages/rooms/RoomUpdate';
import Users from './pages/users/Users';
import UserCreate from './pages/users/UserCreate';
import UserDetails from './pages/users/UserDetails';
import UserUpdate from './pages/users/UserUpdate';
import Login from './pages/login/Login';
import NewRoom from './pages/rooms/NewRoom';
import DetailsRoom from './pages/rooms/DetailsRoom';

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
                            <Route path="/Contact/create" element={<ContactCreate />} />
                            <Route path="/Contact/:id" element={<ContactUpdate  />} />
                          <Route path="/Rooms" element={<Rooms />} />
                            <Route path="/Rooms/create" element={<NewRoom />} />
                            <Route path="/Rooms/:id" element={<DetailsRoom />} />
                            <Route path="/Rooms/update/:id" element={<RoomUpdate  />} />
                            <Route path="/Rooms/:id/delete" element={<NewRoom />} />
                          <Route path="/Users" element={<Users />} />
                            <Route path="/Users/create" element={<UserCreate />} />
                            <Route path="/Users/:id" element={<UserDetails />} />
                            <Route path="/Users/update/:id" element={<UserUpdate />} />
                        </Route>
                      
                  </Routes>
                </AuthProvider>
        </div>
      </BrowserRouter>
    
  );
}
export default App;