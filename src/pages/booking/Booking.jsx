import React, { useState } from 'react';
import Sidebar from '../../components/Dashboard/sidebar/Sidebar'
import Header from '../../components/Dashboard/Header/Header'
import Table from '../../components/table/table'


function Booking() {

    const [showSidebar, setShowSidebar] = useState(true);
    
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    
    return (
        <div className='home'>
        {showSidebar && <Sidebar />}
        <div className="homeContainer">
            <Header  toggleSidebar={toggleSidebar} showSidebar={showSidebar}/>
            
            <Table/>
        </div>
        </div>
    )
}

export default Booking
