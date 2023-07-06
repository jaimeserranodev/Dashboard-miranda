import './App.css';
import Home from './pages/home/Home';
import Booking from './pages/booking/Booking';
import Contact from './pages/contact/Contact';
import Rooms from './pages/rooms/Rooms';
import Users from './pages/users/Users';
import Login from './pages/login/Login';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import  AuthContextProvider  from './context/AuthContext';
import { PrivateRoute } from './router/private.Route';

function App() {
  return (
    
      <BrowserRouter>
        <div className="App">
        <AuthContextProvider>
          
                  <Routes>
                      <Route exact path="/" element={<Login/>} />
                        <Route element={<PrivateRoute />} >
                          <Route path="/home" element={<Home />} />
                          <Route path="/Booking" element={<Booking />} />
                          <Route path="/Contact" element={<Contact />} />
                          <Route path="/Rooms" element={<Rooms />} />
                          <Route path="/Users" element={<Users />} />
                        </Route>
                      
                  </Routes>
                </AuthContextProvider>
        </div>
      </BrowserRouter>
    
  );
}
export default App;