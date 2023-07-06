import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    loggedIn: false,
    email: '',
    password: '',
};

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        login: (state, action) => {
            const { email, password } = action.payload;
                if (email === 'admin' && password === 'admin') {
                    state.loggedIn = true;
                }
        },
        logout: (state) => {
            state.loggedIn = false;
            state.email = '';
            state.password = '';
            localStorage.removeItem('email');
            localStorage.removeItem('password');
        },
        updateUser: (state, action) => {
            const { email, password } = action.payload;
            state.email = email;
            state.password = password;
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
        },
    },
});

export const { login, logout, updateUser } = loginSlice.actions;

export default loginSlice.reducer;