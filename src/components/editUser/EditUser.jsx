import React, {  useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import {  useDispatch } from 'react-redux';
import { updateUser } from '../../features/loginSlice';
import "./editUser.css"

const EditUser = () => {
    const { email, password, setEmail, setPassword} = useContext(AuthContext);
    const dispatch = useDispatch();


    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUser({ email, password }));
        setEmail('');
        setPassword('');

        console.log('Nuevo email:', email);
        console.log('Nueva contraseña:', password);
    };

    return (
    <div className='editUser'>
        <h1>Nuevo empleado</h1>
        <form className='editUser_form' onSubmit={handleSubmit}>
            <div className='editUser_form__div'>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='editUser_form__div'>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button type="submit" onClick={handleSubmit}>Guardar</button>
        </form>
    </div>
    );
};

export default EditUser