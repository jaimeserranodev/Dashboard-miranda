import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { sortByStatus, sortByPrice, addRoom} from "../../features/roomSlice";
import {RootState} from '../../store/store';
import "./styles/table.css";

//-----------PAGINATION---------------------//
interface PaginationProps {
  currentPage: number;
  totalPages: number;
  goToPage: (page: number) => void;
  goToNextPage: () => void;
  goToPreviousPage: () => void;
}
interface Room {
  photo: string;
  roomNumber: string;
  id: number;
  roomType: string;
  Amenities: string;
  price: string;
  offerPrice: number;
  status: string;
}


const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, goToPage, goToNextPage, goToPreviousPage }) => {
  const visiblePageNumbers: number[] = [];

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

//-------------------------- TABLE ROOMS -----------------------//
interface TableProps {
  rooms: Room[];
}


const TableRooms: React.FC<TableProps> = ({ rooms }) => {
  const dispatch = useDispatch();
  const [currentPage, setCurrentPage] = useState(1);
  const roomsPerPage = 8;
  
const sortByValue = useSelector((state: RootState) => state.rooms.sortBy);

  const totalPages = Math.ceil(rooms.length / roomsPerPage);


  const [selectedRoom, setSelectedRoom] = useState<Room | null>(null); // Estado para almacenar la fila seleccionada
//   const [draggedItem, setDraggedItem] = useState(null);


const handleSortBy = (value: 'status' | 'price') => {
    if (value === 'status') {
      dispatch(sortByStatus());
    } else if (value === 'price') {
      dispatch(sortByPrice());
    }
  };

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

  const indexOfLastRoom = currentPage * roomsPerPage;
  const indexOfFirstRoom = indexOfLastRoom - roomsPerPage;
  const currentRooms = rooms.slice(indexOfFirstRoom, indexOfLastRoom);


//----------------- DRAP AND DROP --------------------------------//
  
//   const handleDragStart = (event, room) => {
//     setDraggedItem(room);
//   };

//   const handleDragEnter = (event, room) => {
//     const updatedRooms = [...rooms];
//     const draggedItem = updatedRooms.find((item) => item === draggedItem);
//     updatedRooms.splice(updatedRooms.indexOf(draggedItem), 1);
//     updatedRooms.unshift(draggedItem);
//     dispatch(addRoom(updatedRooms)); // Utiliza la acción addRoom para agregar la habitación en la posición deseada
//   };

//   const handleDragOver = (event) => {
//     event.preventDefault();
//   };

//   const handleDragEnd = () => {
//     setDraggedItem(null);
//   };



  const handleRowClick = (room: Room) => {
    setSelectedRoom(room);
  };

  const closeModal = () => {
    setSelectedRoom(null);
  };

  if (selectedRoom) {
    return (

      //------------------------ MODAL ROOM DETAILS------------//
      <div className='roomDetails'>
        <div className="left">
          <h2>Room Type: {selectedRoom.roomType}</h2>
          <p>Room Number: <br /><span>{selectedRoom.roomNumber}</span></p>
          <span>Description: <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugit doloribus ducimus enim animi eum modi maiores. Debitis numquam quisquam nobis!</p></span>
          <div className='roomOffer'>
            <div className="price">
              <span>Prices</span>
              <p>Price: {selectedRoom.price}</p>
              <p>Discount: {selectedRoom.offerPrice}%</p>
            </div>
            <div className="offer">
              <label htmlFor="offer">
                <span>Offer:</span>
                <input type="checkbox" id="offer" />
                  
              </label>
            </div>
          </div>
          <span>Cancellation:<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates architecto, alias perferendis vitae saepe omnis quia nemo quam autem temporibus.</p></span>
          <p>Amenities:<p className='amenities'>{selectedRoom.Amenities}</p> </p>
          
          {/* Mostrar los demás datos de la habitación */}
        <button onClick={closeModal}>Cerrar</button>
        </div>
        <div className="right">
          <img className='img-roomDetail' src="/room1.jpg" alt="" />
        </div>
          
      </div>
    );
  }

  return (
    <div>
      <table className='table'>
        <thead>
        <tr className='borderTabla'>
          <th className='tableCell'>Photo</th>
          <th className='tableCell'>Room Number</th>
          <th className='tableCell'>ID</th>
          <th className='tableCell'>Room Type</th>
          <th className='tableCell'>Amenities</th>
          <th className='tableCell'>Price</th>
          <th className='tableCell'>Offer Price</th>
          <th className='tableCell'>Status</th>
        </tr>
        </thead>
        <tbody>
        {currentRooms.map((room, index) => (
          <tr
          className='tableRow'
          key={index}
          onClick={() => handleRowClick(room)} // Manejar el clic en la fila
        
            // draggable
            // onDragStart={(event) => handleDragStart(event, room)}
            // onDragEnter={(event) => handleDragEnter(event, room)}
            // onDragOver={handleDragOver}
            // onDragEnd={handleDragEnd}
        >
            <td className='tableCellPhoto'>
              <img src={room.photo} alt="" className='image' />
            </td>
            <td className='tableCellroomNumber'>{room.roomNumber}</td>
            <td className='tableCell'>{room.id}</td>
            <td className='tableCell'>{room.roomType}</td>
            <td className='tableCell'>{room.Amenities}</td>
            <td className='tableCell'>{room.price}</td>
            <td className='tableCell'>{room.offerPrice}%</td>
            <td className={`statusRoom ${room.status}`}>{room.status}</td>
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

export default TableRooms;
