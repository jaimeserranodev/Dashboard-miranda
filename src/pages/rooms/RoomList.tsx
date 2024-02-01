// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom';
// import { getRoomList, deleteRoomById } from '../../features/rooms/roomThunks';
// import { changeRoomsBy } from '../../utils/changeRoomsBy';
// import { useAppDispatch, useAppSelector } from '../../store/hooks';
// import { Room } from '../../types/features';
// import "../../components/table/styles/table.css";


// import NewRoom from './NewRoom';
// import "./styles/rooms.css"

// const RoomsList: React.FC = () => {
//     const { data, status } = useAppSelector(state => state.rooms);
//     const { roomList } = data;
//     const [rooms, setRooms] = useState<Room[]>([]);
//     const [showRooms, setShowRooms] = useState<Room[]>([]);
//     const [pagination, setPagination] = useState(1);
//     const [changeBy, setChangeBy] = useState('all');
    
//     const navigate = useNavigate();
//     const dispatch = useAppDispatch();


//     useEffect(() => {
//         if (status === 'not-loaded') {
//             dispatch(getRoomList());
//         }
//             setRooms(changeRoomsBy(changeBy, [...roomList]));
//             setPagination(1);
//         // eslint-disable-next-line
//         }, [roomList, changeBy])
        
//         useEffect(() => {
//             let index = pagination === 1 ? 0 : (pagination-1)*10;
//             setShowRooms(rooms.slice(index, index+10));
//         }, [pagination, rooms])
        
//         const handleDelete = (e: React.MouseEvent<HTMLElement>, roomId: number) => {
//             dispatch(deleteRoomById(roomId));
//             e.stopPropagation();
//         }






//         //LOGICA PARA ABRIR MODAL PARA NEW ROOM
//         const [isModalOpen, setIsModalOpen] = useState(false);
//         const openModal = () => {
//             setIsModalOpen(true);
//         };

//     //  TO-DO NO FUNCIONA LOGICA PARA LIMITAR UN MAXIMO DE 5 FOTOS
//     // const [selectedPhotos, setSelectedPhotos] = useState<File[]>([]);
    
//     //     const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>)  => {
//     //         const files = Array.from(e.target.files!).slice(0, 5); // Limitar a un máximo de 5 fotos
//     //         if (files.length <= 5) {
//     //         setSelectedPhotos(files);
//     //         }
//     //         };
//     // const selectedPhotosCount = selectedPhotos.length;


//     // const currentSortBy = useSelector((state: RootState) => state.rooms.sortBy);

//     // const handleSortByChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     //     const selectedValue = event.target.value;
//     //     if (selectedValue === 'status') {
//     //     dispatch(sortByStatus());
//     //     } else if (selectedValue === 'price') {
//     //     dispatch(sortByPrice());
//     //     }
//     // };
//     // const handleSortByMenu = (selectedValue: string) => {
//     //     if (selectedValue === 'allRooms') {
//     //         dispatch(sortByAllRooms());
//     //     } else if (selectedValue === 'available') {
//     //         dispatch(sortByAvailable());
//     //     } else if (selectedValue === 'booked') {
//     //         dispatch(sortByBooked());
//     //     }
//     // };



//     return (
//         <div className='RoomsList'>
//             <div className="menu">
//             <button
//                 className={`menu_button ${changeBy !== 'available' && changeBy !== 'booked' ? 'active' : ''}`}
//                 onClick={() => setChangeBy('all')}
//             >
//                 All Rooms</button>
//                 <button className={`menu_button ${changeBy === 'available' ? 'active' : ''}`}
//                 onClick={() => setChangeBy('available')}
//                 >Available</button>
//                 <button 
//                 className={`menu_button ${changeBy === 'booked' ? 'active' : ''}`}
//                 onClick={() => setChangeBy('booked')}
//                 >Booked</button>
//         </div>

//         <div className='modal_New-room'>
//             <button onClick={openModal}>+ New Room</button>
//         </div>
//             {isModalOpen && (
//                 <div className='modal'>
//                     <div className='modal-content'>
//                         <span className='close' onClick={() => setIsModalOpen(false)}>
//                         &times;
//                         </span>
//                         {/* <NewRoom handlePhotoChange={handlePhotoChange} 
//                         selectedPhotosCount={selectedPhotosCount}/>
//                         {selectedPhotosCount < 3 || selectedPhotosCount > 5 && (
//                         <p className="error-message">Selecciona un mínimo de 3 y un máximo de 5 fotos.</p>
//             )} */}

//                     </div>
//                 </div>
//             )}
//         <div className='div-sortBy'>
//         <select className="sortBy" value={changeBy} onChange={(e) => setChangeBy(e.target.value)}>
//             <option value="number">Room Number</option>
//             <option value="status">Status</option>
//             <option value="price">Price</option>

//         </select>
//     </div>
//     </div>
//     )
// }

// export default RoomsList