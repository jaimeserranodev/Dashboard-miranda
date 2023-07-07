import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { sortBy } from './bookingSlice';


export default function SortByComponent() {
    const dispatch = useDispatch();
    const [selectedValue, setSelectedValue] = useState('');

    const handleSortBy = (value) => {
        dispatch(sortBy(value));
        setSelectedValue(value);
    };

    

return (
    <div>
    <div className="menuOptions">
        <button onClick={() => handleSortBy('Order Date')}>All Bookings</button>
        <button onClick={() => handleSortBy('Check in')}>Checking In</button>
        <button onClick={() => handleSortBy('Check out')}>Checking Out</button>
        <button onClick={() => handleSortBy('Guest')}>In Progress</button>
    </div>

    <div>
        <label htmlFor="sortBy">Ordenar por:</label>
        <select 
            id="sortBy" 
            value={selectedValue}
            label={selectedValue ? undefined : 'guest'}
            onChange={(event) => {
                handleSortBy(event.target.value);
            }}>
                
        <option value="guest">Guest</option>
        <option value="orderDate">Order Date</option>
        <option value="checkin">Check in</option>
        <option value="checkOut">Check out</option>
        </select>
    </div>
    </div>
);
};
