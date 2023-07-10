import React, { useState } from 'react';
import "./styles/table.css";
import { useSelector, useDispatch } from 'react-redux';
import { sortBy } from "../../features/BookingSlice"


//-----------PAGINATION---------------------//

    const Pagination = ({ currentPage, totalPages, goToPage, goToNextPage, goToPreviousPage }) => {

    const visiblePageNumbers = [];

        const maxVisiblePages = 4;
        const startPage = Math.max(currentPage - 1, 1);
        const endPage = Math.min(startPage + maxVisiblePages - 1, totalPages);

        for (let i = startPage; i <= endPage; i++) {
            visiblePageNumbers.push(i);
        }

    return (
        <div className='pagination'>
            <button className='btn' onClick={goToPreviousPage} disabled={currentPage === 1}>Prev</button>
            <div className="page-buttons">
                {visiblePageNumbers.map((pageNumber) => (
                <button
                    key={pageNumber}
                    className={`page-button ${pageNumber === currentPage ? 'active' : ''}`}
                    onClick={() => goToPage(pageNumber)}
                >
                    {pageNumber}
                </button>
                ))}
            </div>
                <button className='btn' onClick={goToNextPage} disabled={currentPage === totalPages}>Next</button>
            </div>
            );
        };


    //-------------------------- TABLA-----------------------//

    const Table = () => {
        const dispatch = useDispatch();
        const [currentPage, setCurrentPage] = useState(1);
        const bookingsPerPage = 8;
        const bookings = useSelector((state) => state.booking.list);
        const sortByValue = useSelector((state) => state.booking.sortBy);
    
    const totalPages = Math.ceil(bookings.length / bookingsPerPage);


    const handleSortBy = (value) => {
        dispatch(sortBy(value));
    };

    
    const goToPage = (page) => {
        setCurrentPage(page);
    };

    const goToNextPage = () => {
        if (currentPage < totalPages) {
        setCurrentPage(currentPage + 1);
        }
    };

    const goToPreviousPage = () => {
        if (currentPage > 1) {
        setCurrentPage(currentPage - 1);
        }
    };

    const indexOfLastBooking = currentPage * bookingsPerPage;
    const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
    const currentBookings = bookings.slice(indexOfFirstBooking, indexOfLastBooking);


    return (
        <div>
        <table className='table'>
            <tr className='borderTabla'>
            <th className='tableCell'>Guest</th>
            <th className='tableCell'>Order Date</th>
            <th className='tableCell'>Check In</th>
            <th className='tableCell'>Check Out</th>
            <th className='tableCell'>Special Request</th>
            <th className='tableCell'>Room Type</th>
            <th className='tableCell'>Status</th>
            </tr>
            {currentBookings.map((booking, index) => (
            <tr className='tableRow' key={index}>
                <td className='tableCell'>
                <div className="cellWrapper">
                    <img src={booking.image} alt="" className='image' />
                    <div className="cellGuest">
                    {booking.guest} <br /><span>{booking.id}</span>
                    </div>
                </div>
                </td>
                <td className='tableCell'>{booking.date}</td>
                <td className='tableCell'>{booking.checkIn}<br />{booking.hourIn}</td>
                <td className='tableCell'>{booking.checkOut}<br />{booking.checkOut}</td>
                <td className='tableCell'>
                <span className={`request ${booking.request}`}>{booking.request}</span>
                </td>
                <td className='tableCell'>{booking.roomTipe}</td>
                <td className='tableCell'>
                <span className={`status ${booking.status}`}>{booking.status}</span>
                </td>
            </tr>
            ))}
        </table>
        <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            goToPage={goToPage}
            goToNextPage={goToNextPage}
            goToPreviousPage={goToPreviousPage}
        />
        </div>
    );
    };

export default Table;