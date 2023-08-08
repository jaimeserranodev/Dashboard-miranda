import React, { useState } from 'react';
import Sidebar from '../../components/Dashboard/sidebar/Sidebar'
import Header from '../../components/Dashboard/Header/Header'
import TableUser from '../../components/table/tableUser'
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
            <TableUser />
        </div>
        </div>
    )
}

export default Users
