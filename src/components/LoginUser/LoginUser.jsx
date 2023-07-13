
import "./styles/LoginUser.css"
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../../styles/variables";

const LoginUser = () => {

    const { authState, authDispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'admin' && password === 'admin') {
            authDispatch({ type: "LOGIN", payload: { email, password }});
            navigate("/Home");
        } else {
            setShowAlert(true);
        }
    }

    useEffect(() => {
        if (authState.isLoggedIn) {
            localStorage.setItem('logged', 'true');
            localStorage.setItem('email', 'admin');
            localStorage.setItem('password', 'admin');
            navigate("/Home");
        }else {
            navigate("/")
        }
    }, [authState.isLoggedIn, navigate]);

    return(
        <div className='formularioLogin'>
            
            <form className='formLogin'onSubmit={(e)=> handleSubmit(e)} >
                
                    <h1>Bienvenido</h1>
                    <input 
                        data-cy = "email"
                        type="text" 
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        autoComplete='off'
                        placeholder='email'
                        />
                
                    <input 
                        data-cy = "password"
                        type="password"  
                        name="nombreContraseña" 
                        id="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        autoComplete='off'
                        placeholder='password'
                        />
                
                <Button data-cy="submit">Login</Button>
            </form>
                {showAlert && (
                <div className="alerta">Credenciales incorrectas. Inténtalo de nuevo.</div>
                )}
            <h5>Creado por Jaime Serrano</h5>
        </div>
    );
}

export default LoginUser