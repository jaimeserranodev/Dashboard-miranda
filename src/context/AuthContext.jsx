import React, { createContext, useReducer } from "react";

const initialState = {
    isLoggedIn: false,
    email: "",
    password: "",
    };

    const authReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN":
            return {
                ...state,
                isLoggedIn: true,
                email: action.payload.email,
                password: action.payload.password,
            };
            case "LOGOUT":
                localStorage.removeItem('logged');
                localStorage.removeItem('email');
                localStorage.removeItem('password');
                window.location.reload()

                return {
                    ...state,
                    isLoggedIn: false,
                    email: "",
                    password: "",
                };
                
        case "UPDATE_USER":

            return {
                ...state,
                email: action.payload.email,
                password: action.payload.password,
            };
        default:
            return state;
        }
    };


    const AuthContext = createContext({
        authState: initialState,
        authDispatch: () => {},
    });

    const AuthProvider = ({ children }) => {
    const [authState, authDispatch] = useReducer(authReducer, initialState);

    const value = {
        authState,
        authDispatch,
        isLoggedIn: authState.isLoggedIn,
        userEmail: authState.email,
        userName: authState.password,
    };

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
    };

    export { AuthProvider, AuthContext };
