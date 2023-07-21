import React, { useState } from 'react';
import Sidebar from '../../components/Dashboard/sidebar/Sidebar'
import Header from '../../components/Dashboard/Header/Header'
import "./styles/users.css"

function Users() {
    const [showSidebar, setShowSidebar] = useState(true);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    return (
        <div className='users'>
        {showSidebar && <Sidebar />}
        <div className="usersContainer">
        <Header toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
            <div className="usersTop">
                <h1>Add New User</h1>
            </div>
            <div className="usersBotton">
                <div className="usersLeft">
                    <img 
                        src="https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                        alt="" />
                </div>
                <div className="usersRight">
                    <form>
                    <div className="formInput">
                        <label htmlFor="username">Username</label>
                        <input type="text"  placeholder='Jaime Serrano'/>
                    </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
    )
}

export default Users
