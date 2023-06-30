import React from 'react';
import "./Header.css";
import { HeaderData } from './HeaderData';

import { SlEnvolopeLetter } from 'react-icons/sl';
import { AiOutlineBell } from 'react-icons/ai';
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { MdLogout } from 'react-icons/md';

function Header({ toggleSidebar, showSidebar }) {
    const getTitle = () => {
        const ruta = window.location.pathname;
        let titulo;

    switch (ruta) {
        case "/":
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

const handleClick = () => {
    localStorage.clear();
    window.location.reload();
};

const icon = showSidebar ? (
    <AiOutlineArrowLeft className='icon' />
  ) : (
    <AiOutlineArrowRight className='icon' />
  );

return (
    <div className='Header'>
        <div className="wrapper">
            <ul className='HeaderList'>
            {HeaderData.map((val, key) => (
                <li
                key={key}
                className='titulos'
                
                >
                <div id='icon' onClick={toggleSidebar}>{icon}</div>
                <div id='title'>{getTitle()}</div>
                </li>
            ))}
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
                    <MdLogout onClick={handleClick} className='icon' />
                </div>
            </div>
        </div>
    </div>
    );
}

export default Header;
