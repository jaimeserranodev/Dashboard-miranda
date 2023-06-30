import React, { useState } from 'react';
import Sidebar from '../../components/Dashboard/sidebar/Sidebar'
import Header from '../../components/Dashboard/Header/Header'
import GuestDetail from '../../components/guestDetail/guestDetail'

function Contact() {
    const [showSidebar, setShowSidebar] = useState(true);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className='home'>
        {showSidebar && <Sidebar />}
        <div className="homeContainer">
        <Header toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
            <GuestDetail />

        </div>
        </div>
    )
}

export default Contact
