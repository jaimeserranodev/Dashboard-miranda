import React from 'react'
import "./styles/guestDetail.css"
import perfil from "../../imagenes/foto.perfil.jpeg"


const GuestDetail: React.FC = () => {
    return (
        <div className="guestDetail">
            <div className="left">
                <div className="top">
                    <div className="div">
                        <img src={perfil} alt="" />
                        <div>
                            <p className="name">Roberto Mansini</p>
                            <span className='id'>ID 12341234123123</span>
                        </div>
                    </div>
                    <div className="check">
                        <div className="checkLeft">
                            <span className="checkIn">
                                Check In
                            </span>
                            <span className='date'>October 30th, 2020 | 08:23 AM</span>
                        </div>
                        <div className="checkRight">
                            <span className="checkOut">
                                Check Out
                            </span>
                            <span className='date'>November 2th, 2020</span>
                        </div>
                    </div>
                </div>
                <div className="center">
                    
                </div>
                <div className="bottom">
                    
                </div>
                
            </div>
            <div className="right">
                
            </div>
        </div>
    )
}

export default GuestDetail