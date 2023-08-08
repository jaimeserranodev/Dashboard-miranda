import React, { useState } from 'react';
import  {BookingType} from "../../types/features";
import  Pagination  from '../pagination/Pagination';
import "./styles/table.css";

    //-------------------------- TABLA-----------------------//
    interface TableProps {
        bookings: any[];
    }
    const Table: React.FC<TableProps> = ({ bookings }) => {
        
        // LOGICA PARA PAGINACION //
        const [currentPage, setCurrentPage] = useState<number>(1);
        const bookingsPerPage = 8;
        const totalPages = Math.ceil(bookings.length / bookingsPerPage);
    
        const goToPage = (page: number) => {
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
        console.log({ bookings});
        
        const indexOfLastBooking = currentPage * bookingsPerPage;
        const indexOfFirstBooking = indexOfLastBooking - bookingsPerPage;
        const currentBookings = bookings.slice(indexOfFirstBooking, indexOfLastBooking);
        // LOGICA PARA PAGINACION //

    return (
        <div>
        <table className='table'  >
        <tr className='borderTabla'>
                <th className='tableCell'>Guest</th>
                <th className='tableCell'>Order Date</th>
                <th className='tableCell' >Check In</th>
                <th className='tableCell' >Check Out</th>
                <th className='tableCell' >Special Request</th>
                <th className='tableCell' >Room Type</th>
                <th className='tableCell' >Status</th>
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
                <span className={`request ${booking.special_request}`}>{booking.request}</span>
                </td>
                <td className='tableCell'>{booking.room_type}</td>
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