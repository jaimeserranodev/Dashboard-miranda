import React, { useRef } from 'react'
import { updateRoom, getRoomList } from '../../features/rooms/roomThunks';
import  "../../images/rooms-3.jpg";
import { useNavigate, useParams } from 'react-router-dom';
import { Room } from '../../types/features';
import "./styles/roomStyles/RoomUpdate/RoomUpdate.css";
import { useAppDispatch, useAppSelector } from '../../store/hooks';

const RoomUpdate = () => {
  const params = useParams();
  const { data } = useAppSelector(state => state.rooms);
  const room = data.roomList.find(({ _id }) => _id === String(params.id));
  
  const formRef = useRef(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const room3 = require('../../images/rooms-3.jpg').default;
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formRef.current) {
      const formData = new FormData(formRef.current);
      const room: Room = {
        "_id": String(params.id),
        "name": formData.get('name')?.toString(),
        "bed_type": formData.get('bed_type')?.toString(),
        "photo": room3,
        "rate": Number(formData.get('price')),
        "offer": Number(formData.get('offer')),
        "description": formData.get('description')?.toString(),
        "amenities": ["Wifi", "Towels", "LED TV"],
        "status": "Available",
      }
      dispatch(updateRoom(room))
      dispatch(getRoomList())
      navigate('/rooms');
    }
  }
  
  return (
    <div className='create'>
      <h2 className='create__title'>Edit Room</h2>
      <form ref={formRef} className='create__form' onSubmit={(e) => handleSubmit(e)}>
        <div className='create__form__grid'>
          <div className='create__form__column'>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="name">Room name</label>
              <input name='name' type="name" id='name' defaultValue={room?.name} />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="price">Price</label>
              <input name='price' type="number" defaultValue={room?.rate} />
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="offer">Offer Price</label>
              <input name='offer' type="number" id='offer' defaultValue={room?.offer || Math.floor(room?.rate || 0 / 1.5)} />
            </div>
            <select name='bed_type' className='create__form__column__cell weight-600' defaultValue={room?.bed_type}>
              <option value="Single Bed">Single Bed</option>
              <option value="Double Bed">Double Bed</option>
              <option value="Double Luxury">Double Luxury</option>
            </select>
            <div className='create__form__column__cell create__form__amenities'>
              <label className='weight-600' htmlFor="amenities">Amenities</label>
              <div>
                <div className='create__form__amenities__box'>
                  <label htmlFor="shower">Shower</label>
                  <input type="checkbox" id="shower" />
                </div>
                <div className='create__form__amenities__box'>
                  <label htmlFor="ac">AC</label>
                  <input type="checkbox" id="ac" />
                </div>
                <div className='create__form__amenities__box'>
                  <label htmlFor="wifi">Wifi</label>
                  <input type="checkbox" id="wifi" />
                </div>
                <div className='create__form__amenities__box'>
                  <label htmlFor="ledtv">LED TV</label>
                  <input type="checkbox" id="ledtv" />
                </div>
              </div>
            </div>
          </div>
          <div className='create__form__column'>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="description">Description</label>
              <textarea name='description' id="description" cols={30} rows={10} defaultValue={room?.description || ''}></textarea>
            </div>
            <div className='create__form__column__cell'>
              <label className='weight-600' htmlFor="cancel">Cancellation Policy</label>
              <textarea name='cancellation' cols={30} rows={10} id='cancel'></textarea>
            </div>
          </div>
        </div>
        <button className='create__form__btn' type='submit'>Update Room</button>
      </form>
    </div>
  )
}

export default RoomUpdate