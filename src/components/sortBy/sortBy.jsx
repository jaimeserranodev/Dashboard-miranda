import React, { useState } from 'react';

const SortBy = ({ row }) => {
const [sortBy, setSortBy] = useState('Order Date');

const handleSortBy = (column) => {
    setSortBy(column);
};

const sortedBookings = row.sort((a, b) => {
    if (sortBy === 'Guest') {
    return a.guest.localeCompare(b.guest);
    } else if (sortBy === 'Check in') {
    return new Date(a.checkIn) - new Date(b.checkIn);
    } else if (sortBy === 'Check out') {
    return new Date(a.checkOut) - new Date(b.checkOut);
    } else {
    return new Date(a.orderDate) - new Date(b.orderDate);
    }
});

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
        <select id="sortBy" value={sortBy} onChange={(e) => handleSortBy(e.target.value)}>
        <option value="Guest">Guest</option>
        <option value="Order Date">Order Date</option>
        <option value="Check in">Check in</option>
        <option value="Check out">Check out</option>
        </select>
    </div>
    </div>
);
};

export default SortBy;
