
import "./styles/LoginUser.css"
import React, { useContext, useState, useEffect, FormEvent } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../../styles/variables";

const LoginUser = () => {

    const { authState, authDispatch } = useContext(AuthContext);
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showAlert, setShowAlert] = useState(false);

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const target = e.target as typeof e.target & {
            email: { value: string };
            password: { value: string };
        };
        const emailValue = target.email.value;
        const passwordValue = target.password.value;
    
        if (emailValue === "admin" && passwordValue === "admin") {
            authDispatch({ type: "LOGIN", payload: { email: emailValue, password: passwordValue } });
            navigate("/Home");
        } else {
            setShowAlert(true);
        }
    };

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
                
                    <h1>DASHBOARD  <br />MIRANDA</h1>
                    <input 
                        className="inputLogin"
                        data-cy = "email"
                        type="text" 
                        name="email"
                        id="email"
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        autoComplete='off'
                        placeholder='admin'
                        />
                
                    <input 
                        className="inputLogin"
                        data-cy = "password"
                        type="password"  
                        name="nombreContraseña" 
                        id="password"
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        autoComplete='off'
                        placeholder='admin'
                        />
                
                <Button type="submit" data-cy="submit">Login</Button>
                
            </form>
                {showAlert && (
                <div className="alerta">Credenciales incorrectas. Inténtalo de nuevo.</div>
                )}
            <h5>Creado por Jaime Serrano</h5>
        </div>
    );
}

export default LoginUser