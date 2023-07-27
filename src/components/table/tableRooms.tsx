import React, { useEffect, useState } from 'react'
import {  useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { getRoomList, deleteRoomById } from '../../features/rooms/roomThunks';
import { changeRoomsBy } from '../../utils/changeRoomsBy';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { Room } from '../../types/features';
import "../../components/table/styles/table.css";
import {RootState} from '../../store/store';

import "./styles/tableRooms/tableRooms.css"

interface TableProps {
  rooms: Room[];
}

const RoomList: React.FC<TableProps> = () => {
  const { data, status } = useAppSelector(state => state.rooms);
  const { roomList } = data;
  const [rooms, setRooms] = useState<Room[]>([]);
  const [showRooms, setShowRooms] = useState<Room[]>([]);
  const [pagination, setPagination] = useState(1);
  const [changeBy, setChangeBy] = useState('all');

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === 'not-loaded') {
      dispatch(getRoomList());
    }
    setRooms(changeRoomsBy(changeBy, [...roomList]));
    setPagination(1);
    // eslint-disable-next-line
  }, [roomList, changeBy])

  useEffect(() => {
    let index = pagination === 1 ? 0 : (pagination-1)*10;
    setShowRooms(rooms.slice(index, index+10));
  }, [pagination, rooms])

  const handleDelete = (e: React.MouseEvent<HTMLElement>, roomId: number) => {
    dispatch(deleteRoomById(roomId));
    e.stopPropagation();
  }

  return (
    <div className='table'>
      <div className='RoomsList'>
        <ul className='menu'>
          <li className={`menu_button ${changeBy !== 'available' && changeBy !== 'booked' ? 'menu_button' : ''}`} 
            onClick={() => setChangeBy('all')}
          >All Rooms</li>
          <li className={`menu_button ${changeBy === 'available' ? 'menu_button' : ''}`} 
            onClick={() => setChangeBy('available')}
          >Available</li>
          <li className={`menu_button ${changeBy === 'booked' ? 'menu_button' : ''}`} 
            onClick={() => setChangeBy('booked')}
          >Booked</li>
        </ul>
        <div className='d-flex-center'>
          <button className='list__top__button' onClick={() => navigate('/rooms/new')}>+ New Room</button>
          <select className='list__top__select' value={changeBy} onChange={(e) => setChangeBy(e.target.value)}>
            <option className='list__top__select__text' value="number">Room number</option>
            <option className='list__top__select__text' value="status">Status</option>
            <option className='list__top__select__text' value="price">Price</option>
          </select>
        </div>
      </div>
      <div className='list__table'>
        <div className='list__table__row list__table__row--first'>
          <p className='list__table__row__item weight-700'>Photo</p>
          <p className='list__table__row__item weight-700'>Room Name</p>
          <p className='list__table__row__item weight-700'>Room Type</p>
          <p className='list__table__row__item weight-700'>Amenities</p>
          <p className='list__table__row__item weight-700' style={{ justifyContent: 'center' }}>Price</p>
          <p className='list__table__row__item weight-700' style={{ justifyContent: 'center' }}>Offer</p>
          <p className='list__table__row__item weight-700'>Status</p>
        </div>
        <ul style={{ listStyle: 'none' }}>
          { status === 'pending' && <p className='list__table__nothing'>Loading...</p> }
          { 
            showRooms.length === 0 && <p className='list__table__nothing'>Nothing to show here</p>
          }
          {showRooms.map((room) => {
            return (
              <div key={room.id} onClick={() => navigate(`/rooms/${room.id}`)} className='list__table__row'>
                <div className='list__table__row__item'>
                  <img className='rooms__photo' src={room.photo} alt="" />
                </div>
                <div className='list__table__row__item rooms__name'>
                  <p className='list__table__row__item__id'>#{room.id.toString().padStart(2, '0')}</p>
                  <p className='weight-500'>{room.name}</p>
                </div>
                <p className='list__table__row__item weight-500'>{room.bed_type}</p>
                <p className='list__table__row__item'>
                  {room.amenities.slice(0, -1).map(amenity => amenity + ', ')}
                  {room.amenities.slice(-1)[0]}
                </p>
                <p className='list__table__row__item weight-500 rooms__price'>
                  {room.rate}$
                  <span className='rooms__night'>/night
                  </span>
                </p>
                <p className='list__table__row__item weight-500 rooms__offer'>
                  {room.offer || Math.floor(room.rate / 1.5)}$
                  <span className='rooms__night'>/night
                  </span>
                </p>
                <div className='list__table__row__item'>
                  <p className={`rooms__status 
                    ${room.status === 'Available' ? 'rooms__status--green' : 'rooms__status--red'}`}
                  >{room.status}</p>
                </div>
                
              </div> 
            )})}
        </ul>
      </div>
      <div className='list__bottom'>
        <p className='list__bottom__text'>Showing {showRooms.length} of {roomList.length} Data</p>
        
      </div>
    </div>
  )
}

export default RoomList