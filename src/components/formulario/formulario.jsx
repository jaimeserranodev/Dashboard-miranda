
// import { useRef } from 'react'
import React from 'react'
import "./formulario.css"
import Home from '../../pages/home/Home'
import { AuthContext } from '../../context/AuthContext'
import { useState } from 'react'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

const Formulario = () => {
    const { email, setEmail, password, setPassword } = useContext(AuthContext);
    const navigate = useNavigate()
    
    const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email);
    console.log(password);
    if (email === "admin" && password === "admin") {
    localStorage.setItem("logged", "true");
    localStorage.setItem("email", "email");
    localStorage.setItem("password", "password");

    navigate("/Home");
    } else{
        console.log("Usuario o contraseña incorrectos")
    }
};

    return(
        <div className='formularioLogin'>
            
            <form className='formLogin'onSubmit={(e)=> handleSubmit(e)} >
                <div>
                    <h1>Bienvenido</h1>
                    <input 
                        type="text" 
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        autoComplete='off'
                        placeholder='email'
                        />
                </div>
                <div>
                    <input 
                        type="password"  
                        name="nombreContraseña" 
                        id="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        autoComplete='off'
                        placeholder='password'
                        />
                </div>
                <button>Login</button>
            </form>
            
        </div>
    );
}

export default Formulario

