
import React, { useContext } from 'react'
import "./formulario.css"
import { useDispatch } from 'react-redux';
import { AuthContext } from '../../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import { login } from "../../features/loginSlice";


const LoginUser = () => {

    const { email, setEmail, password, setPassword } = useContext(AuthContext);
    const navigate = useNavigate()
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        dispatch(login({ email, password }));

        if (email === 'admin' && password === 'admin') {
            localStorage.setItem('logged', 'true');
            localStorage.setItem('email', 'admin');
            localStorage.setItem('password', 'admin');

            navigate('/Home');
        } else {
            console.log('Usuario o contraseña incorrectos');
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

export default LoginUser

