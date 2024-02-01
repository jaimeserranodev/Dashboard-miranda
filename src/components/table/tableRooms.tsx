import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getRoomList, deleteRoomById } from "../../features/rooms/roomThunks";
import { changeRoomsBy } from "../../utils/changeRoomsBy";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { Room } from "../../types/features";

import { RoomData } from "../../pages/rooms/RoomData";
import "../../components/table/styles/table.css";
import { RootState } from "../../store/store";
import IRemoveRow from "../RemoveRow/RemoveRow";
import "./styles/tableRooms/tableRooms.css";
import { BsFillTrashFill } from "react-icons/bs";
interface TableProps {
  rooms: any[];
}

const RoomList: React.FC<TableProps> = () => {
  const { data, status } = useAppSelector((state) => state.rooms);
  const { roomList } = data;
  const [rooms, setRooms] = useState<Room[]>([]);
  const [showRooms, setShowRooms] = useState<Room[]>([]);
  const [pagination, setPagination] = useState(1);
  const [changeBy, setChangeBy] = useState("all");
  const { _id } = useParams(); 
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (status === "not-loaded") {
      dispatch(getRoomList());
    }
    setRooms(changeRoomsBy(changeBy, [...RoomData]));
    setPagination(1);
    // eslint-disable-next-line
  }, [roomList, changeBy]);

  useEffect(() => {
    let index = pagination === 1 ? 0 : (pagination - 1) * 10;
    setShowRooms(rooms.slice(index, index + 10));
  }, [pagination, rooms]);


  const handleDelete = async (e: React.MouseEvent<HTMLElement>, _id: string) => {
    try {
      await dispatch(deleteRoomById(_id));
      await dispatch(getRoomList());
      e.stopPropagation();
    } catch (error) {
      // Manejar errores aquí
      console.error('Error:', error);
    }
  };

  const getRandomOfferPercentage = () => {
    const randomPercentage = Math.floor(Math.random() * 21) * 5; // Números entre 0 y 20, luego se multiplica por 5 para obtener múltiplos de 5.
    return randomPercentage;
  };

  // ----------------------PAGINATION-------------------------//

  const itemsPerPage = 10;

  const handlePreviousPage = () => {
    if (pagination > 1) {
      setPagination((prev) => prev - 1);
    }
  };

  const handleNextPage = () => {
    if (pagination < Math.ceil(rooms.length / itemsPerPage)) {
      setPagination((prev) => prev + 1);
    }
  };

  // -----------------------------------------------------------//

  // ---------------------DELETE ROW---------------------------//
  
  
  return (
    <div className="table">
      <div className="RoomsList">
        <ul className="menu">
          <li
            className={`menu_button ${
              changeBy !== "available" && changeBy !== "booked"
                ? "menu_button"
                : ""
            }`}
            onClick={() => setChangeBy("all")}
          >
            All Rooms
          </li>
          <li
            className={`menu_button ${
              changeBy === "available" ? "menu_button" : ""
            }`}
            onClick={() => setChangeBy("available")}
          >
            Available
          </li>
          <li
            className={`menu_button ${
              changeBy === "booked" ? "menu_button" : ""
            }`}
            onClick={() => setChangeBy("booked")}
          >
            Booked
          </li>
        </ul>
        <div className="d-flex-center">
          <Link to="/rooms/create" className="newRoom">
            New Room +
          </Link>
          <select
            className="selectRoom"
            value={changeBy}
            onChange={(e) => setChangeBy(e.target.value)}
          >
            <option className="list__top__select__text" value="number">
              Room number
            </option>
            <option className="list__top__select__text" value="status">
              Status
            </option>
            <option className="list__top__select__text" value="price">
              Price
            </option>
          </select>
        </div>
      </div>
      <table className="table">
        <thead>
          <tr className="borderTabla">
            <th className="tableCell">ID</th>
            <th className="tableCell">Photo</th>
            <th className="tableCell">Room Name</th>
            <th className="tableCell">Room Type</th>
            <th className="tableCell">Amenities</th>
            <th className="tableCell">Price</th>
            <th className="tableCell">Offer</th>
            <th className="tableCell">Status</th>
            
          </tr>
        </thead>
        <tbody>
          {status === "pending" && (
            <p className="list__table__nothing">Loading...</p>
          )}
          {showRooms.length === 0 && (
            <p className="list__table__nothing">Nothing to show here</p>
          )}
          {showRooms.map((room) => (
            <tr
              key={room._id}
              onClick={() => navigate(`/rooms/${room._id}`)}
              className="tableRow"
            >
              <td className="tableCell">
              {room._id !== undefined ? room._id.toString().slice(-4).padStart(4, "0") : ""}
              </td>
              <td className="tableCell">
                <img src={room.photo} alt="" className="image" />
              </td>
              <td className="tableCell">{room.name}</td>
              <td className="tableCell">{room.bed_type}</td>
              <td className="tableCellAmenities">
                {room.amenities.slice(0, -1).map((amenity) => amenity + ", ")}
                {room.amenities.slice(-1)[0]}
              </td>
              <td className="tableCell">{room.rate}€</td>
              <td className="tableCell">
                {getRandomOfferPercentage()}%
                {/* Limitar el porcentaje al 100% */}
              </td>
              <td className={`statusRoom ${room.status}`}>{room.status}</td>
              <td>
                <button
                  className="deleteButton"
                  onClick={(e) => {
                    e.stopPropagation();
                    handleDelete(e, room._id);
                  }}
                >
                  <BsFillTrashFill />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="list__bottom">
        <p className="list__bottom__text">
          Showing {showRooms.length} of {roomList.length} Data
        </p>
      </div>

      <div className="list__table__pagination">
        <button
          className="list__table__pagination__button"
          onClick={handlePreviousPage}
          disabled={pagination === 1}
        >
          Previous
        </button>
        <button
          className="list__table__pagination__button"
          onClick={handleNextPage}
          disabled={pagination >= Math.ceil(rooms.length / itemsPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default RoomList;
