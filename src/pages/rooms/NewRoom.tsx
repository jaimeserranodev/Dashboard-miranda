import React, { useState, useRef } from 'react'
import { createRoom, getRoomList } from '../../features/rooms/roomThunks';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { Room } from '../../types/features';
import "./styles/roomStyles/NewRoom/NewRoom.css"

const NewRoom = () => {
    const [offer, setOffer] = useState(false);
    const [amenities, setAmenities] = useState(['AC', 'Shower', 'LED TV', 'Wifi']);
    const formRef = useRef(null);

    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleAmenities = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.checked) {
        setAmenities((prevState) => [...prevState, e.target.name]);
        } else {
        setAmenities((prevState) => prevState.filter((amenity) => amenity !== e.target.name));
        }
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (formRef.current) {
        const formData = new FormData(formRef.current);
        const room: Omit<Room, '_id'> = {
            "name": formData.get('name')?.toString(),
            "bed_type": formData.get('bed_type')?.toString(),
            "photo": formData.get('photo')?.toString(),
            "description": formData.get('description')?.toString(),
            "rate": Number(formData.get('price')),
            "offer": Number(formData.get('price')) * (1 - Number(formData.get('discount')) / 100),
            "status": "Available",
            "amenities": amenities
        }
        try {
            await dispatch(createRoom(room));
            // Después de crear la habitación, puedes llamar a getRoomList para actualizar la lista
            dispatch(getRoomList());
            navigate('/rooms');
        } catch (error) {
            // Manejar el error aquí, si es necesario
        }
    }
}

    return (
        <div className='new-room'>
        <h2 className='new-room__title'>Add New Room</h2>
        <form ref={formRef} className='form-new-room' onSubmit={(e) => handleSubmit(e)}>
            <div className='new-room__form__grid'>
                <div className='new-room__form__column'>
                    <div className='create__form__column__cell'>
                        <label className='weight-600' htmlFor="name">Room name</label>
                        <input name='name' type="text" id='name' />
                    </div>
                    <div className='create__form__column__cell'>
                        <label className='weight-600' htmlFor="price">Price</label>
                        <input name='price' type="number" />
                    </div>
                    <div className='create__form__radio'>
                    <i>Discount?</i>
                        <label htmlFor="offerYes">Yes</label>
                        <input type="radio" name='offer' id='offerYes' onChange={() => setOffer(true)} checked={offer} />
                        <label htmlFor="offerNo">No</label>
                        <input type="radio" name='offer' id='offerNo' onChange={() => setOffer(false)} checked={!offer} />
                    </div>
                    {
                    offer &&
                    <div className='create__form__column__cell'>
                        <label className='weight-600' htmlFor="discount">Discount (%)</label>
                        <input name='discount' type="number" id='discount' />
                    </div>
                    }
                    <select name='bed_type' className='create__form__column__cell weight-600'>
                        <option value="Single Bed">Single Bed</option>
                        <option value="Double Bed">Double Bed</option>
                        <option value="Double Luxury">Double Luxury</option>
                    </select>
                    <div className='create__form__column__cell'>
                        <label htmlFor="photo" className='weight-600'>Image URL</label>
                        <input type="text" name='photo' />
                    </div>
                    <div className='create__form__column__cell create__form__amenities'>
                        <label className='weight-600' htmlFor="amenities">Amenities</label>
                    <div>
                        <div className='create__form__amenities__box'>
                        <label htmlFor="shower">Shower</label>
                        <input type="checkbox" id="shower" name='Shower' defaultChecked onChange={(e) => handleAmenities(e)} />
                        </div>
                        <div className='create__form__amenities__box'>
                        <label htmlFor="ac">AC</label>
                        <input type="checkbox" id="ac" name='AC' defaultChecked onChange={(e) => handleAmenities(e)} />
                        </div>
                        <div className='create__form__amenities__box'>
                        <label htmlFor="wifi">Wifi</label>
                        <input type="checkbox" id="wifi" name='Wifi' defaultChecked onChange={(e) => handleAmenities(e)} />
                        </div>
                        <div className='create__form__amenities__box'>
                        <label htmlFor="ledtv">LED TV</label>
                        <input type="checkbox" id="ledtv" name='LED TV' defaultChecked onChange={(e) => handleAmenities(e)} />
                        </div>
                    </div>
                    </div>
                </div>
                <div className='create__form__column'>
                    <div className='create__form__column__cell'>
                    <label className='weight-600' htmlFor="description">Description</label>
                    <textarea name='description' id="description" cols={30} rows={10}></textarea>
                    </div>
                    <div className='create__form__column__cell'>
                    <label className='weight-600' htmlFor="cancel">Cancellation Policy</label>
                    <textarea name='cancellation' cols={30} rows={10} id='cancel'></textarea>
                    </div>
                </div>
            </div>
            <button type='submit' className='create__form__btn'>Create Room</button>
        </form>
        </div>
    )
}

export default NewRoom