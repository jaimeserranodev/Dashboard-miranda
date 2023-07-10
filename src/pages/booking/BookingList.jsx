// import React from 'react'
// import "./styles/booking.css"
// import { useDispatch, useSelector } from 'react-redux';
// import { sortBy } from "../../features/BookingSlice"
// import { useState } from 'react';


// const BookingList = () => {

//     const dispatch = useDispatch();
//     const [selectedValue, setSelectedValue] = useState('guest');

//     const handleSortBy = (value) => {
//         dispatch(sortBy(value));
//         setSelectedValue(value);
//     };

//     const currentSortBy = useSelector((state) => state.booking.list);

//     return (
//         <div className='BookingList'>
//             <div className="menu">
//                 <button className='menu_button' onClick={() => handleSortBy('orderDate')}>All Bookings</button>
//                 <button className='menu_button' onClick={() => handleSortBy('checkIn')}>Checking In</button>
//                 <button className='menu_button' onClick={() => handleSortBy('checkOut')}>Checking Out</button>
//                 <button className='menu_button' onClick={() => handleSortBy('guest')}>In Progress</button>
//             </div>
        
//         <div>
//         <select className="sortBy" value={currentSortBy} onChange={(event) => handleSortBy(event.target.value)}>
//             <option value="guest">Guest</option>
//             <option value="orderDate">Order Date</option>
//             <option value="checkIn">Check in</option>
//             <option value="checkOut">Check out</option>
//         </select>
//     </div>
//     </div>
//     )
// }

// export default BookingList

import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortBy } from "../../features/BookingSlice";
import "./styles/booking.css"
const BookingList = () => {
    const dispatch = useDispatch();
    const sortByValue = useSelector((state) => state.booking.sortBy);
    const [selectedValue, setSelectedValue] = useState('orderDate');

    const handleSortBy = (value) => {
        dispatch(sortBy(value));
        setSelectedValue(value);
    };

    return (
        <div className="BookingList">
            <div className="menuOptions">
                <button onClick={() => handleSortBy('orderDate')}>All Bookings</button>
                <button onClick={() => handleSortBy('checkIn')}>Checking In</button>
                <button onClick={() => handleSortBy('checkOut')}>Checking Out</button>
                <button onClick={() => handleSortBy('guest')}>In Progress</button>
            </div>
            <div>
                <label htmlFor="sortBy">Ordenar por:</label>
                    <select
                    id="sortBy"
                    value={sortByValue}
                    onChange={(event) => handleSortBy(event.target.value)}
                    >
                    <option value="guest">Guest</option>
                    <option value="orderDate">Order Date</option>
                    <option value="checkIn">Check In</option>
                    <option value="checkOut">Check Out</option>
                    </select>
            </div>
        </div>
    );
};

export default BookingList;