
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortBy} from "../../features/booking/BookingSlice";
import { RootState } from '../../store/store';

import "./styles/booking.css"


const BookingList: React.FC = () => {
    const dispatch = useDispatch();
    const sortByValue = useSelector((state: RootState) => state.booking.sortBy);
    const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedSortBy = event.target.value as "guest" | "orderDate" | "checkIn" | "checkOut";
        dispatch(sortBy(selectedSortBy)); // Disparar la acción para cambiar el valor de sortBy
    };
    

    return (
        <div className="BookingList">
            <div className="menu">
                <button
                    className={`menu_button ${sortByValue === 'orderDate' ? 'active' : ''}`}
                    onClick={() => dispatch(sortBy('orderDate'))}
                    >All Bookings
                </button>
                <button
                    className={`menu_button ${sortByValue === 'checkIn' ? 'active' : ''}`}
                    onClick={() => dispatch(sortBy('checkIn'))}
                    >Checking In
                </button>
                <button
                    className='menu_button'
                    onClick={() => dispatch(sortBy('checkOut'))}
                    >Checking Out
                </button>
                <button
                    className='menu_button'
                    onClick={() => dispatch(sortBy('guest'))}
                    >In Progress
                </button>
            </div>
            <div>
                <label htmlFor="sortBy">Ordenar por:</label>
                    <select
                    id="sortBy"
                    value={sortByValue}
                    onChange={handleSortByChange}
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