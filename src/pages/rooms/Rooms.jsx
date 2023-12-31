import React, { useState } from 'react';
import Sidebar from '../../components/Dashboard/sidebar/Sidebar'
import Header from '../../components/Dashboard/Header/Header'
import Table from '../../components/table/tableRooms'

import RoomsList from './RoomList';
import roomListData from "./roomListData.json"
import { store } from '../../store/store';
import { Provider } from 'react-redux';

function Rooms() {

    const [showSidebar, setShowSidebar] = useState(true);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };
    
    return (
        <Provider store={store}>
            <div className='home'>
                {showSidebar && <Sidebar />}
                <div className="homeContainer">
                    <Header  toggleSidebar={toggleSidebar} showSidebar={showSidebar}/>
                    <RoomsList />
                    <Table rooms={roomListData}/>
                </div>
            </div>
        </Provider>
    ) 
}

export default Rooms
