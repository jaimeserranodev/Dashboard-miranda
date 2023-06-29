import React from 'react'
import Sidebar from '../../components/Dashboard/sidebar/Sidebar'
import Header from '../../components/Dashboard/Header/Header'
function Rooms() {
    return (
        <div className='home'>
        <Sidebar />
        <div className="homeContainer">
            <Header />
        </div>
        </div>
    )
}

export default Rooms
