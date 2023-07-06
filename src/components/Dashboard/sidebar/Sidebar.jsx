import React, { useState } from 'react';
import "../../../App.css"
import logo from '../../../imagenes/Logo.png';
import perfil from '../../../imagenes/foto.perfil.jpeg';
import "./Sidebar.css";
import EditUser from '../../editUser/EditUser';
import { SidebarData } from './SidebarData';


function Sidebar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div className='Sidebar'>
            <li className='logo'>
                        <img id='logo' src={logo} alt="Logo" />
                    </li>
            <ul className='SidebarList'>
            {SidebarData.map((val, key) => {
                return (
                <li 
                    key={key}
                    className='row'
                    id= {window.location.pathname === val.link ? "active" : ""}
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
            <div className='User_card'>
                <img id='perfil' src={perfil} alt="" />
                <p>Jaime Serrano</p>
                <span>jaimeserrano.dev@gmail.com</span>
                <button onClick={openModal}>Editar</button>
            </div>
            {isModalOpen && (
            <div className='modal'>
                <div className='modal-content'>
                    <span className='close' onClick={() => setIsModalOpen(false)}>
                    &times;
                    </span>
                    <EditUser />
                </div>
            </div>
        )}
            <div className="copywrite">
                <p>Travl Hotel Admin Dashboard</p>
                <div className='spans'>
                    <span>© 2023 All Rights Reserved</span>
                    <span>Made with ♥ by JaimeSerrano</span>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
