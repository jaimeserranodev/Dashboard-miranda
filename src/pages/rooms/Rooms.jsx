import React, { useState } from 'react';
import Sidebar from '../../components/Dashboard/sidebar/Sidebar'
import Header from '../../components/Dashboard/Header/Header'
function Rooms() {
    const [showSidebar, setShowSidebar] = useState(true);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className='home'>
        {showSidebar && <Sidebar />}
        <div className="homeContainer">
        <Header toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
        </div>
        </div>
    )
}

export default Rooms
