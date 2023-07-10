import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { sortByStatus, sortByPrice } from "../../features/roomSlice";
import NewRoom from './NewRoom';
import "./styles/rooms.css"

const RoomsList = () => {
    const dispatch = useDispatch();

    
    //LOGICA PARA ABRIR MODAL PARA NEW ROOM
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => {
        setIsModalOpen(true);
    };

    //  TO-DO NO FUNCIONA LOGICA PARA LIMITAR UN MAXIMO DE 5 FOTOS
    const [selectedPhotos, setSelectedPhotos] = useState([]);
    const handlePhotoChange = (e) => {
        const files = Array.from(e.target.files).slice(0, 5); // Limitar a un máximo de 5 fotos
        if (files.length <= 5) {
        setSelectedPhotos(files);
        }
        };
    const selectedPhotosCount = selectedPhotos.length;


    const currentSortBy = useSelector((state) => state.rooms.sortBy);

    const handleSortByChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue === 'status') {
        dispatch(sortByStatus());
        } else if (selectedValue === 'price') {
        dispatch(sortByPrice());
        }
    };

    return (
        <div className='RoomsList'>
            <div className="menu">
                <button className='menu_button'>All Rooms</button>
                <button className='menu_button'>Active Employee</button>
                <button className='menu_button'>Inactive Employee</button>
        </div>

        <div className='modal_New-room'>
            <button onClick={openModal}>+ New Room</button>
        </div>
            {isModalOpen && (
                <div className='modal'>
                    <div className='modal-content'>
                        <span className='close' onClick={() => setIsModalOpen(false)}>
                        &times;
                        </span>
                        <NewRoom handlePhotoChange={handlePhotoChange}
                        selectedPhotosCount={selectedPhotosCount}/>
                        {selectedPhotosCount < 3 || selectedPhotosCount > 5 && (
                        <p className="error-message">Selecciona un mínimo de 3 y un máximo de 5 fotos.</p>
            )}

                    </div>
                </div>
            )}
        <div className='div-sortBy'>
        <select className="sortBy" value={currentSortBy} onChange={handleSortByChange}>
            <option value="status">Status</option>
            <option value="price">Price</option>

        </select>
    </div>
    </div>
    )
}

export default RoomsList