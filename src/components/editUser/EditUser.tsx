
import { AuthContext } from '../../context/AuthContext';
import React, { useContext, useState, useEffect } from 'react';
import "./styles/editUser.css"

const EditUser: React.FC = () => {
    

    const { authState, authDispatch } = useContext(AuthContext);
    const { email: initialEmail, password: initialPassword } = authState;
    const [email, setEmail] = useState(initialEmail);
    const [password, setPassword] = useState(initialPassword);

    useEffect(() => {
        setEmail(initialEmail);
        setPassword(initialPassword);
    }, [initialEmail, initialPassword]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        authDispatch({ type: 'UPDATE_USER', payload: { email, password } });
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