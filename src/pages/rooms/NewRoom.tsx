import React, { useState, ChangeEvent, FormEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addRoom } from "../../features/roomSlice";
import { RootState } from '../../store/store';
import "./styles/rooms.css"


interface NewRoomProps {
    handlePhotoChange: (e: ChangeEvent<HTMLInputElement>) => void;
    selectedPhotosCount: number;
}

const NewRoom: React.FC<NewRoomProps> = () => {
    const dispatch = useDispatch();
    const [photos, setPhotos] = useState<File[]>([]);
    const [photoUrls, setPhotoUrls] = useState<string[]>([]);
    const [roomType, setRoomType] = useState('');
    const [roomNumber, setRoomNumber] = useState('');
    const [description, setDescription] = useState('');
    const [offer, setOffer] = useState(false);
    const [price, setPrice] = useState('');
    const [discount, setDiscount] = useState('');
    const [cancellation, setCancellation] = useState('');
    const [selectedAmenities, setSelectedAmenities] = useState<string[]>([]);

    const handlePhotoChange = (e: ChangeEvent<HTMLInputElement>) => {
      const selectedPhotos = Array.from(e.target.files!).slice(0, 5); // Limitando a un máximo de 5 fotos
        setPhotos(selectedPhotos);

    const urls = Array.from(selectedPhotos).map((photo) =>
        URL.createObjectURL(photo)
    );
    setPhotoUrls(urls);
    };

    const handleAmenityChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value, checked } = e.target;
        if (checked) {
            setSelectedAmenities((prevAmenities) => [...prevAmenities, value]);
        } else {
            setSelectedAmenities((prevAmenities) =>
            prevAmenities.filter((amenity) => amenity !== value)
            );
        }
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    const newRoom = {
        photos,
        roomType,
        roomNumber,
        description,
        offer,
        price,
        discount,
        cancellation,
        amenities: selectedAmenities,
    };
    dispatch(addRoom(newRoom));
        setPhotos([]);
        setRoomType('');
        setRoomNumber('');
        setDescription('');
        setOffer(false);
        setPrice('');
        setDiscount('');
        setCancellation('');
        setSelectedAmenities([]);

    };
    return (
    <div className="modal-new-room">
        <form onSubmit={handleSubmit} className='form-new-room'>
            <div>
                {photoUrls.map((url) => (
                <img src={url} alt="Room Photo" key={url} style={{ width: '100px', marginBottom: '10px', marginLeft: '10%' }} />
                ))}
            </div>
            <div>
                <label htmlFor="photos">Fotos (mínimo 3, máximo 5):</label>
                <input
                className='input-new-room'
                type="file"
                id="photos"
                name="photos"
                accept="image/*"
                multiple
                onChange={handlePhotoChange}
                />
            </div>
            <div className='roomType-roomNumber'>
                <div className='div_roomType'>
                    <label htmlFor="roomType">Tipo de habitación:</label>
                    <select
                        id="roomType"
                        name="roomType"
                        value={roomType}
                        onChange={(e) => setRoomType(e.target.value)}
                    >
                        <option value="">Seleccionar tipo de habitación</option>
                        <option value="Single Bed">Single Bed</option>
                        <option value="Double Bed">Double Bed</option>
                        <option value="Double Superior">Double Superior</option>
                        <option value="Suite">Suite</option>
                    </select>
                    </div>
                <div>
                    <label htmlFor="roomNumber">Número de habitación:</label>
                    <input
                    className='input-new-room'
                    type="text"
                    id="roomNumber"
                    name="roomNumber"
                    value={roomNumber}
                    onChange={(e) => setRoomNumber(e.target.value)}
                    />
                </div>
            </div>
            <div>
                <label htmlFor="description">Descripción de la habitación:</label>
                <textarea
                id="description"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="offer">Oferta:</label>
                <input
                type="checkbox"
                id="offer"
                name="offer"
                checked={offer}
                onChange={(e) => setOffer(e.target.checked)}
                />
            </div>
            <div>
                <label htmlFor="price">Precio por noche:</label>
                <input
                type="text"
                id="price"
                name="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="discount">Descuento (porcentaje):</label>
                <input
                type="text"
                id="discount"
                name="discount"
                value={discount}
                onChange={(e) => setDiscount(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="cancellation">Política de cancelación:</label>
                <textarea
                id="cancellation"
                name="cancellation"
                value={cancellation}
                onChange={(e) => setCancellation(e.target.value)}
                />
            </div>
            <div>
                <label>Amenities:</label>
                <div>
                <label>
                    <input
                    type="checkbox"
                    name="amenities"
                    value="TV"
                    checked={selectedAmenities.includes('TV')}
                    onChange={handleAmenityChange}
                    />
                    TV
                </label>
                </div>
                <div>
                <label>
                    <input
                    type="checkbox"
                    name="amenities"
                    value="bañera"
                    checked={selectedAmenities.includes('bañera')}
                    onChange={handleAmenityChange}
                    />
                    Bañera
                </label>
                </div>
                <div>
                <label>
                    <input
                    type="checkbox"
                    name="amenities"
                    value="vista del mar"
                    checked={selectedAmenities.includes('vista del mar')}
                    onChange={handleAmenityChange}
                    />
                    Vista del mar
                </label>
                </div>
                {/* Agrega más checkboxes para los amenities disponibles */}
            </div>
            <button type="submit">Crear habitación</button>
        </form>
    </div>
);
};

export default NewRoom;