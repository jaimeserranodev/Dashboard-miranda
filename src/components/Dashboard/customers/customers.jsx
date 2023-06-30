import React from 'react'
import "./customers.css"
import perfil from '../../../imagenes/foto.perfil.jpeg';
import { AiOutlineCheckCircle } from 'react-icons/ai';
import { TiDeleteOutline } from 'react-icons/ti';

const Customers = () => {
    return (
        <div className='customers'>
                <span className='customers-review'>Latest Review by Customers</span>
                <div className="customer-container">
                <div className="wrapper-top-botton">
                    <div className="top"> 
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span>
                    </div>
                    
                    <div className="botton">
                        <img id="review-foto" src={perfil} alt=''/>
                        <div className="botton-text">
                            <span>Kusnaidi Anderson</span>
                            <span className='subtitle'>4 min ago</span>
                        </div>
                        <span className='checkOk'><AiOutlineCheckCircle /></span>
                        <span className='checkX'><TiDeleteOutline /></span>
                    </div>
                </div>
                <div className="wrapper-top-botton">
                    <div className="top"> 
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span>
                    </div>
                    
                    <div className="botton">
                        <img id="review-foto" src={perfil} alt=''/>
                        <div className="botton-text">
                            <span>Kusnaidi Anderson</span>
                            <span className='subtitle'>4 min ago</span>
                        </div>
                        <span className='checkOk'><AiOutlineCheckCircle /></span>
                        <span className='checkX'><TiDeleteOutline /></span>
                    </div>
                </div>
                <div className="wrapper-top-botton">
                    <div className="top"> 
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam</span>
                    </div>
                    
                    <div className="botton">
                        <img id="review-foto" src={perfil }alt=''/>
                        <div className="botton-text">
                            <span>Kusnaidi Anderson</span>
                            <span className='subtitle'>4 min ago</span>
                        </div>
                        <span className='checkOk'><AiOutlineCheckCircle /></span>
                        <span className='checkX'><TiDeleteOutline /></span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Customers