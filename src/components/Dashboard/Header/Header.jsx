import React from 'react';
import "./Header.css";
import { HeaderData } from './HeaderData';
import logo from '../../../imagenes/Logo.png';
import {SlEnvolopeLetter} from 'react-icons/sl';
import {AiOutlineBell} from 'react-icons/ai';
import { MdLogout } from 'react-icons/md';

function Header() {
    return (
        <div className='Header'>
            <div className="wrapper">
                <ul className='HeaderList'>
                    <li className='logo'>
                        <img id='logo' src={logo} alt="Logo" />
                    </li>
                    {HeaderData.map((val, key) => {
                    return (
                    <li 
                        key={key}
                        className='titulos'
                        id= {window.location.pathname == val.link ? "active" : ""}
                        onClick={()=> {
                            window.location.pathname = val.link
                        }}
                    >
                        <div id='icon'>{val.icon}</div>
                        <div id='title'>
                            {val.title}
                        </div>
                    </li> 
                    );
                    })}
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
                        <MdLogout className='icon' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
