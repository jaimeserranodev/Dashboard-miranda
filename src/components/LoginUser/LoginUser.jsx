
import "./styles/LoginUser.css"
import React, { useContext, useState, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const LoginUser = () => {

    const { authState, authDispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email === 'admin' && password === 'admin') {
            authDispatch({ type: "LOGIN", payload: { email, password }});
            navigate("/Home");
        } else {
            console.log('Credenciales incorrectas');
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

export default LoginUser