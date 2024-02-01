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

        const showNotes = (e: React.MouseEvent<HTMLButtonElement>) => {
            const target = e.target as HTMLElement;
            const nextSibling = target.nextElementSibling as HTMLElement;
            nextSibling.style.display = 'block';
            e.stopPropagation();
          }
          const hideNotes = (e: React.MouseEvent<HTMLDivElement>) => {
            e.currentTarget.style.display = 'none';
            e.stopPropagation();
          }


    return (
        <div>
        <table className='table'  >
        <thead>

        <tr className='borderTabla'>
                <th className='tableCell'>Guest</th>
                <th className='tableCell'>Order Date</th>
                <th className='tableCell' >Check In</th>
                <th className='tableCell' >Check Out</th>
                <th className='tableCell' >Special Request</th>
                <th className='tableCell' >Room Type</th>
                <th className='tableCell' >Status</th>
            </tr>
            </thead>
    <tbody>
            {currentBookings.map((booking, index) => (
            <tr className='tableRow' key={index}>
                <td className='tableCell'>
                <div className="cellWrapper">
                    <img src={booking.image} alt="" className='image' />
                    <div className="cellGuest">
                    {booking.guest} <br /><span>{booking._id !== undefined ? booking._id.toString().slice(-4).padStart(4, "0") : ""}</span>
                    </div>
                </div>
                </td>
                <td className='tableCell'>{booking.date}</td>
                <td className='tableCell'>{booking.check_in}<br />{booking.hourIn}</td>
                <td className='tableCell'>{booking.check_out}<br />{booking.checkOut}</td>
                <td className='tableCell'>
                <button onClick={(e) => showNotes(e)}  className={`request ${booking.special_request}`}>View Notes</button>
                    <div className='list__notes-modal-wrapper' onClick={(e) => hideNotes(e)}>
                        <div className='list__notes-modal' onClick={(e) => e.stopPropagation() }>
                        <p>{booking.special_request || 'No special requests'}</p>
                        </div>
                    </div>
                </td>
                <td className='tableCell'>{booking.roomTipe}</td>
                <td className='tableCell'>
                <span className={`status ${booking.status}`}>{booking.status}</span>
                </td>
            </tr>
            ))}
            </tbody>
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