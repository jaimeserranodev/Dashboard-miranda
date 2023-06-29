import React from 'react'
import Sidebar from '../../components/Dashboard/sidebar/Sidebar'
import Header from '../../components/Dashboard/Header/Header'
import Table from '../../components/table/table'

function Booking() {
    return (
        <div className='home'>
        <Sidebar />
        <div className="homeContainer">
            <Header />
            <Table />
        </div>
        </div>
    )
}

export default Booking
