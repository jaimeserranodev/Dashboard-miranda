import React from 'react'
import "../booking/styles/booking.css"
import { useDispatch, useSelector } from 'react-redux';
import { sortBy } from "../../features/BookingSlice"

const RoomsList = () => {

    const dispatch = useDispatch();

    const handleSortByChange = (event) => {
        const selectedValue = event.target.value;
        dispatch(sortBy(selectedValue));
    };

    const currentSortBy = useSelector((state) => state.booking.list.sortBy);

    return (
        <div className='BookingList'>
            <div className="menu">
                <button className='menu_button'>All Rooms</button>
                <button className='menu_button'>Active Employee</button>
                <button className='menu_button'>Inactive Employee</button>
            </div>
        
        <div>
        <select className="sortBy" value={currentSortBy} onChange={handleSortByChange}>
            <option value="guest">Guest</option>
            <option value="orderDate">Order Date</option>
            <option value="checkIn">Check in</option>
            <option value="checkOut">Check out</option>
        </select>
    </div>
    </div>
    )
}

export default RoomsList