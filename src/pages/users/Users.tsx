import React, { useState, useEffect } from 'react';
import Sidebar from '../../components/Dashboard/sidebar/Sidebar'
import Header from '../../components/Dashboard/Header/Header'
import TableUser from '../../components/table/tableUser'
import "./styles/users.css"
import { RootState, AppDispatch } from '../../store/store';
import { useDispatch, useSelector } from 'react-redux';

import { getUserList } from '../../features/user/UserThunks';

function Users() {
    const [showSidebar, setShowSidebar] = useState(true);
    const dispatch = useDispatch<AppDispatch>();
    const { data } = useSelector((state: RootState) => state.user);
    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    useEffect(() => {
        dispatch(getUserList());
    }, [dispatch]);

    return (
        <div className='users'>
        {showSidebar && <Sidebar />}
        <div className="usersContainer">
        <Header toggleSidebar={toggleSidebar} showSidebar={showSidebar} />
            <TableUser users={data.User}/>
        </div>
        </div>
    )
}

export default Users
