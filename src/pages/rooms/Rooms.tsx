import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Dashboard/sidebar/Sidebar'
import Header from '../../components/Dashboard/Header/Header'
import Table from '../../components/table/tableRooms'
import RoomsList from './RoomList';
import { Room } from '../../types/features';

import { useDispatch, useSelector } from 'react-redux';
import { getRoomList } from '../../features/rooms/roomThunks';
import { RootState, AppDispatch } from '../../store/store';

function Rooms() {
    const [showSidebar, setShowSidebar] = useState(true);
    const dispatch = useDispatch<AppDispatch>();
    const { data } = useSelector((state: RootState) => state.rooms);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    useEffect(() => {
        dispatch(getRoomList());
    }, [dispatch]);

    return (
        <div className='home'>
            {showSidebar && <Sidebar />}
            <div className="homeContainer">
                <Header toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
                {/* <RoomsList /> */}
                <Table rooms={data.roomList} />
            </div>
        </div>
    );
}

export default Rooms;