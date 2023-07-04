import React from 'react'
import "./table.css"
const Table = () => {

    const row = [
        {
            guest: "pepe Smith",
            id: "#132123123",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            date: "Oct 30th 2020",
            hourIn: "09:21 AM",
            hourOut:"09:21 AM",
            customer: "John Smith",
            checkIn: "Oct 30th 2020",
            checkOut: "Nov 2th, 2020",
            request: "view Notes",
            roomType:"Deluxe A -02",
            status: "Booked",
        },
        {
            guest: "Angela Smith",
            id: "#132123123",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            date: "Oct 30th 2020",
            hourIn: "09:21 AM",
            hourOut:"09:21 AM",
            customer: "John Smith",
            checkIn: "Oct 30th 2020",
            checkOut: "Nov 2th, 2020",
            request: "view Notes",
            roomType:"Deluxe A -02",
            status: "Booked",
        },
        {
            guest: "Angela Smith",
            id: "#132123123",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            date: "Oct 30th 2020",
            hourIn: "09:21 AM",
            hourOut:"09:21 AM",
            customer: "John Smith",
            checkIn: "Oct 30th 2020",
            checkOut: "Nov 2th, 2020",
            request: "view Notes",
            roomType:"Deluxe A -02",
            status: "Booked",
        },
        {
            guest: "Angela Smith",
            id: "#132123123",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            date: "Oct 30th 2020",
            hourIn: "09:21 AM",
            hourOut:"09:21 AM",
            customer: "John Smith",
            checkIn: "Oct 30th 2020",
            checkOut: "Nov 2th, 2020",
            request: "view Notes",
            roomType:"Deluxe A -02",
            status: "Booked",
        },
        {
            guest: "Angela Smith",
            id: "#132123123",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            date: "Oct 30th 2020",
            hourIn: "09:21 AM",
            hourOut:"09:21 AM",
            customer: "John Smith",
            checkIn: "Oct 30th 2020",
            checkOut: "Nov 2th, 2020",
            request: "view Notes",
            roomType:"Deluxe A -02",
            status: "Booked",
        },
        {
            guest: "Angela Smith",
            id: "#132123123",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            date: "Oct 30th 2020",
            hourIn: "09:21 AM",
            hourOut:"09:21 AM",
            customer: "John Smith",
            checkIn: "Oct 30th 2020",
            checkOut: "Nov 2th, 2020",
            request: "view Notes",
            roomType:"Deluxe A -02",
            status: "Booked",
        },
        {
            guest: "Angela Smith",
            id: "#132123123",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            date: "Oct 30th 2020",
            hourIn: "09:21 AM",
            hourOut:"09:21 AM",
            customer: "John Smith",
            checkIn: "Oct 30th 2020",
            checkOut: "Nov 2th, 2020",
            request: "view Notes",
            roomType:"Deluxe A -02",
            status: "Booked",
        },
        {
            guest: "Angela Smith",
            id: "#132123123",
            img: "https://m.media-amazon.com/images/I/81bc8mA3nKL._AC_UY327_FMwebp_QL65_.jpg",
            date: "Oct 30th 2020",
            hourIn: "09:21 AM",
            hourOut:"09:21 AM",
            customer: "John Smith",
            checkIn: "Oct 30th 2020",
            checkOut: "Nov 2th, 2020",
            request: "Notes",
            roomType:"Deluxe A -02",
            status: "Booked",
        },
    ]

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
                {row.map((row) => ( 
                <tr key={row.id}>
                    
                    <td className='tableCell'>
                        <div className="cellWrapper">
                            <img src={row.img} alt="" className='image'/>
                            <div className="cellGuest">
                                {row.guest} <br/><span>{row.id}</span>
                            </div>
                        </div>
                    </td>
                    <td className='tableCell'>{row.date}</td>
                    <td className='tableCell'>{row.checkIn}<br/>{row.hourIn}</td>
                    <td className='tableCell'>{row.checkOut}<br/>{row.checkOut}</td>
                    <td className='tableCell'>
                        <span className={`request ${row.request}`}>{row.request}</span>
                    </td>
                        
                    <td className='tableCell'>{row.roomType}</td>
                    <td className='tableCell'>
                        <span className={`status ${row.status}`}>{row.status}</span>
                    </td>
                    
                </tr>
                ))}
            </table>
        </div>
    )
}

export default Table