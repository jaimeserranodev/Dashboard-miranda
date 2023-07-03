
import { useRef } from 'react'
import React from 'react'
import "./formulario.css"
import Home from '../../pages/home/Home'

const Formulario = () => {

    const email=useRef()
    const password=useRef()
    const getEmail=localStorage.getItem("emailData")
    const getPassword=localStorage.getItem("passwordData")
    const handleSubmit=()=>{
        if(email.current.value==="admin" && password.current.value==="admin"){
            localStorage.setItem("emailData","admin")
            localStorage.setItem("passwordData","admin")
        }
    }

    return(
        <div className='formularioLogin'>
            {
                getEmail&&getPassword?
                <Home/>:
            <form className='formLogin' onSubmit={handleSubmit}>
                <div>
                    <h1>Bienvenido</h1>
                    <input type="text" ref={email} />
                </div>
                <div>
                    <input type="password" ref={password} />
                </div>
                <button>Login</button>
            </form>
            }
        </div>
    );
}

export default Formulario