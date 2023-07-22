import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import  { RootState } from "../../store/store";
import { BookingType } from "src/types/features";
import  {sortByGuest, sortByCheckIn, sortByCheckOut, sortByOrderDate, sortByStatus}  from "src/features/booking/BookingSlice";

import { bookingSlice } from "src/features/booking/BookingSlice";
import "./styles/booking.css"

const BookingList: React.FC = () => {
    const dispatch = useDispatch();
    const data = useSelector((state: RootState) => state.booking.data);
    //quiero usar el reducer de bookingSlice
    const { sortByGuest, sortByCheckIn, sortByCheckOut, sortByOrderDate, sortByStatus } = bookingSlice.actions;
    //quiero usar el reducer de bookingSlice
    useEffect(() => {
        dispatch((sortByGuest(data)));
    }
    , [dispatch]);

    const handleSortByGuest = () => {
        dispatch(sortByGuest(data));
    };
    const handleSortByCheckIn = () => {
        dispatch(sortByCheckIn(data));
    };
    const handleSortByCheckOut = () => {
        dispatch(sortByCheckOut(data));
    };
    const handleSortByOrderDate = () => {
        dispatch(sortByOrderDate(data));
    };
    const handleSortByStatus = () => {
        dispatch(sortByStatus(data));
    };
   

    return (
        <div className="BookingList">
            <div className="menu">
                <button
                    className= "menu_button "

                    >All Bookings
                </button>
                <button
                    className= "menu_button "
                    onClick={handleSortByCheckIn}
                    >Checking In
                </button>
                <button
                    className= "menu_button "
                    onClick={handleSortByCheckOut}
                    >Checking Out
                </button>
                <button
                    className= "menu_button "
                    onClick={handleSortByOrderDate}
                    >In Progress
                </button>
            </div>
            <div>
                <label htmlFor="sortBy">Ordenar por:</label>
                    <select
                    id="sortBy"
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