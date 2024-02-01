import React, { createContext, useReducer, Dispatch, ReactNode } from "react";

interface AuthState {
    isLoggedIn: boolean;
    email: string;
    password: string;
}

interface AuthActionLogin {
    type: "LOGIN";
    payload: {
    email: string;
    token: string;
    };
}

interface AuthActionLogout {
    type: "LOGOUT";
}

interface AuthActionUpdateUser {
    type: "UPDATE_USER";
    payload: {
        email: string;
        password: string;
    };
}

type AuthAction = AuthActionLogin | AuthActionLogout | AuthActionUpdateUser;

const initialState: AuthState = {
    isLoggedIn: false,
    email: "",
    password: "",
};

    const authReducer = (state: AuthState, action: AuthAction) => {
    switch (action.type) {
        case "LOGIN":
            const { email, token } = action.payload;
            localStorage.setItem('email', email);
            localStorage.setItem('token', token);
            return {
                ...state,
                isLoggedIn: true,
                email,
            };
            case "LOGOUT":
                localStorage.removeItem('logged');
                localStorage.removeItem('email');
                localStorage.removeItem('password');
                localStorage.removeItem('token');
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

    interface AuthContextType {
        authState: AuthState;
        authDispatch: Dispatch<AuthAction>;
        isLoggedIn: boolean;
        email: string;
    }

    const AuthContext = createContext<AuthContextType>({
        authState: initialState,
        authDispatch: () => {},
        isLoggedIn: false,
        email: "",
    });

    const AuthProvider = ({ children }: { children: ReactNode }) => {
        const [authState, authDispatch] = useReducer(authReducer, initialState);
        const { isLoggedIn, email } = authState;
    
        const value: AuthContextType = {
            authState,
            authDispatch,
            isLoggedIn,
            email,
        };

        return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
    };

    export { AuthProvider, AuthContext };