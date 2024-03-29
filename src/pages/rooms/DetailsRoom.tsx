import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getRoomList } from "../../features/rooms/roomThunks";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import "./styles/roomStyles/DetailsRoom/DetailsRoom.css"
import Header from "../../components/Dashboard/Header/Header";
import Sidebar from "../../components/Dashboard/sidebar/Sidebar";
import {FaBed} from 'react-icons/fa';
import {TbEdit} from 'react-icons/tb';

const RoomDetails = () => {
    const [showSidebar, setShowSidebar] = useState(true);
  const params = useParams();
  const { data, status } = useAppSelector((state) => state.rooms);
  const [currentSlide, setCurrentSlide] = useState(0);
  const room = data.roomList.find(({ _id }) => _id === String(params.id));

  const dispatch = useAppDispatch();
  useEffect(() => {
    if (status === "loaded") {
      dispatch(getRoomList());
    }
    // eslint-disable-next-line
  }, []);

  const statusTagClassMap: { [key: string]: string } = {
    Available: "details__right__status-tag--green",
    Booked: "details__right__status-tag--red",
  };

  if (!room) {
    return (
      <>
        <h2>Room not found!</h2>
      </>
    );
  }
 
  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
};
  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 3 ? 0 : prevSlide + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? 3 : prevSlide - 1));
  };


  return (
    <div className='home'>
                {showSidebar && <Sidebar />}
                <div className="homeContainer">
                    <Header  toggleSidebar={toggleSidebar} showSidebar={showSidebar}/>
    <div className="details">
      <div className="details__left">
        <div className="details__row">
          <div className="details__left__photo">
            <FaBed size={60} />
          </div>
          <div className="details__left__main">
            <h2>{room.name}</h2>
            <p className="details__left__main__id">
              ID #{room._id.toString().padStart(2, "0")}
            </p>
            <div style={{ display: "flex", alignItems: "center" }}>
              <button className="details__left__main__phone-btn">
                <Link to={`/rooms/update/${room._id}`}>
                  <TbEdit size={20} />
                </Link>
              </button>
              <p className="rooms__big-text">{room.bed_type}</p>
            </div>
          </div>
        </div>
        <div className="details__row">
          <div className="details__left__room">
            <p>Price</p>
            <p>
              ${room.rate}
              <span> /night</span>
            </p>
          </div>
          <div className="details__left__room">
            <p>Offer</p>
            <p>
              ${room.offer || Math.floor(room.rate / 1.5)}
              <span> /night</span>
            </p>
          </div>
        </div>
        <div className="details__left__bar"></div>
        <p style={{ margin: "50px 0" }} className="details__left__text">
          {room.description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum"}
        </p>
        <p className="details__left__facilities">Facilities</p>
        <div className="details__left__amenities">
          <div className="details__left__amenities__box">
            <i className="fa-solid fa-bed"></i>
            <p>3 Bed Space</p>
          </div>
          <div className="details__left__amenities__box">
            <i className="fa-solid fa-shield-halved"></i>
            <p>24 Hours Guard</p>
          </div>
          <div className="details__left__amenities__box">
            <i className="fa-solid fa-wifi"></i>
            <p>Free Wifi</p>
          </div>
        </div>
        <div className="details__left__amenities">
          <div className="details__left__amenities__box details__left__amenities__box--small">
            <p>2 Bathroom</p>
          </div>
          <div className="details__left__amenities__box details__left__amenities__box--small">
            <p>Air Conditioner</p>
          </div>
          <div className="details__left__amenities__box details__left__amenities__box--small">
            <p>Television</p>
          </div>
        </div>
      </div>
      <div className="details__right">
        <div
          className={`details__right__status-tag ${
            statusTagClassMap[room.status]
          }`}
        >
          <p>{room.status}</p>
        </div>

        <div
            className="details__right__img-wrapper"
            style={{
              transform: `translateX(-${currentSlide * 100}%)`,
              display: "flex",
            }}
          >
            <div className="details__right__img details__right__img--1 "></div>
            <div className="details__right__img details__right__img--2"></div>
            <div className="details__right__img details__right__img--3"></div>
            <div className="details__right__img details__right__img--4"></div>
          </div>
          <div className="details__right__text">
                    <h3 className="details__right__text__title">Bed Room</h3>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet facere
                        earum expedita dolore, fuga nobis debitis sint illo. Nisi recusandae
                        eveniet dolor adipisci quod sapiente accusantium sunt fugit ipsum
                        molestias?
                    </p>
                    </div>
          <div className="details__right__buttons">
          <button onClick={prevSlide} className="details__right__button">
            &lt; {/* Left arrow or any icon indicating previous */}
          </button>
          <button onClick={nextSlide} className="details__right__button">
            &gt; {/* Right arrow or any icon indicating next */}
          </button>
        </div>
        </div>
           
        
        <div className="details__right__text">
        `
        
      </div>
    </div>
    </div>
    </div>
  );
};

export default RoomDetails;
