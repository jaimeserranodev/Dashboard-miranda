import './App.css';
import Home from './pages/home/Home';
import Booking from './pages/booking/Booking';
import Contact from './pages/contact/Contact';
import Rooms from './pages/rooms/Rooms';
import Users from './pages/users/Users';
import { Route, Routes, BrowserRouter } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
      <div className="App">
        
        
        <div>
                <Routes>
                    <Route path="/"/>
                      <Route index element ={<Home />}></Route>
                      <Route path="Booking" element={<Booking />} />
                      <Route path="/Contact" element={<Contact />} />
                      <Route path="/Rooms" element={<Rooms />} />
                      <Route path="/Users" element={<Users />} />
                </Routes>
              </div>
      </div>
    </BrowserRouter>
  );
}

export default App;