import React, { useState } from 'react';
import Header from '../../components/Dashboard/Header/Header';
import Sidebar from '../../components/Dashboard/sidebar/Sidebar';
import Widget from '../../components/widget/widget';
import Customers from '../../components/Dashboard/customers/customers';
import "./home.css";

function Home() {
    const [showSidebar, setShowSidebar] = useState(true);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

return (
    <div className="home">
        <div className='sidebar-wrapper'>
            {showSidebar && <Sidebar />}
        </div>
        <div className='homeContainer'>
            <Header toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
            <div className="widgets">
                <Widget type="booking" />
                <Widget type="occupation" />
                <Widget type="check-in" />
                <Widget type="check-out" />
            </div>
            <div className="customers">
                <Customers />
            </div>
        </div>
    </div>
    );
}

export default Home;