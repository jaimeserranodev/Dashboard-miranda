import React, { useContext } from 'react';
import "./Header.css";
import { SlEnvolopeLetter } from 'react-icons/sl';
import { AiOutlineBell } from 'react-icons/ai';
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { MdLogout } from 'react-icons/md';
import { AuthContext } from '../../../context/AuthContext';
import { useDispatch } from 'react-redux';
import { logout } from '../../../features/loginSlice';



function Header({ toggleSidebar, showSidebar }) {

    const dispatch = useDispatch();

    const { handleLogout } = useContext(AuthContext);
    
    const getTitle = () => {
        const ruta = window.location.pathname;
        let titulo;
        switch (ruta) {
            case "/Home":
                titulo = "Dashboard";
                break;
            case "/Booking":
                titulo = "Booking";
                break;
            case "/Rooms":
                titulo = "Rooms";
                break;
            case "/Contact":
                titulo = "Contact";
                break;
            case "/Users":
                titulo = "Users";
                break;
            default:
                titulo = "Página no encontrada";
                break;
        }
        return titulo;
    };

    const icon = showSidebar ? (
        <AiOutlineArrowLeft className='icon' />
    ) : (
        <AiOutlineArrowRight className='icon' />
    );




    const handleLogoutClick = () => {
        dispatch(logout());
        handleLogout();
    };



    return (
        <div className='Header'>
            
            <div className="wrapper">
                <ul className='HeaderList'>
                    <li className='titulos'>
                        <div id='icon' onClick={toggleSidebar}>
                            {icon}
                        </div>
                        <div id='title'>
                            {getTitle()}
                        </div>
                    </li>
                </ul>
                <div className='items'>
                    <div className='item'>
                        <SlEnvolopeLetter className='icon' />
                        <div className="counter">1</div>
                    </div>
                    <div className='item'>
                        <AiOutlineBell className='icon' />
                        <div className="counter">2</div>
                    </div>
                    <div className='item'>
                        <MdLogout onClick={handleLogoutClick} className='icon' />
                    </div>
                </div>
            </div>
            
        </div>
    );
}

export default Header;
