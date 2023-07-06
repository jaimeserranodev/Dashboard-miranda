import React from 'react'
import LoginUser from '../../components/LoginUser/LoginUser'
import "./login.css"
import { Provider } from 'react-redux';
import store from '../../store/store';
function Login() {
    return (
        <div className="login">
            <Provider store={store}>
                <LoginUser />
            </Provider>
        </div>
    )
}

export default Login
