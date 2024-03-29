import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { RootState } from "../../store/store";
import {
    sortByGuest,
    sortByCheckIn,
    sortByCheckOut,
    sortByOrderDate,
    sortByStatus,
} from "../../features/booking/BookingSlice";
import "./styles/booking.css";
import client from "../../api/httpclient";
import { BookingType } from "../../types/features";



const BookingList: React.FC = () => {
    
    const dispatch = useDispatch();
    const { data } = useSelector((state: RootState) => state.booking);
    console.log("holahola", data);
    const [selectedSort, setSelectedSort] = useState<string>('orderDate');

    const [optionsSelect, setOptionsSelect] = useState([
        { value: "guest", label: "Guest" },
        { value: "orderDate", label: "Order Date" },
        { value: "checkIn", label: "Check In" },
        { value: "checkOut", label: "Check Out" },
    ]);

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

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedValue = event.target.value;
        setSelectedSort(selectedValue);
        switch (selectedValue) {
            case "guest":
                dispatch(sortByGuest(data));
                break;
            case "orderDate":
                dispatch(sortByOrderDate(data));
                break;
            case "checkIn":
                dispatch(sortByCheckIn(data));
                break;
            case "checkOut":
                dispatch(sortByCheckOut(data));
                break;
            case "status":
                dispatch(sortByStatus(data)); // Assuming you have a sortByStatus action
                break;
            default:
                // No valid option selected, do nothing
                break;
        }
    };

return (
    <div className="BookingList">
    <div className="menu">
        <button className="menu_button" onClick={ handleSortByOrderDate }>All Bookings</button>
        <button className="menu_button" onClick={handleSortByCheckIn}>
        Checking In
        </button>
        <button className="menu_button" onClick={handleSortByCheckOut}>
        Checking Out
        </button>
        <button className="menu_button" onClick={handleSortByOrderDate}>
        In Progress
        </button>
    </div>
    <div>
        <label htmlFor="sortBy">Ordenar por:</label>
        <select id="sortBy" onChange={handleSortChange} value={selectedSort}>
        {optionsSelect.map((item, index) => (
            <option key={index} value={item.value}>
            {item.label}
            </option>
        ))}
        </select>
    </div>
    </div>
);
};

export default BookingList;
