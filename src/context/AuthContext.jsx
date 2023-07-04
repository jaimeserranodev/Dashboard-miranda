// import React, { createContext, useReducer} from "react";


// const user ="admin";
// const password ="admin";

// const initialState = {
//     autenticado: false,
//     nombreUsuario: "",
//     nombreContraseña:"",
// };

// const reducer = (state, action) => {
//     switch (action.type) {
//     case "login":
//         const { nombreUsuario, nombreContraseña} = action.payload;
//         if (nombreUsuario === user && nombreContraseña === password){
//         const newState = {
//         ...state,
//         autenticado: true,
//         nombreUsuario,
//         nombreContraseña,
//         };
//         localStorage.setItem("authState", JSON.stringify(newState));
//         return newState;
//     } else {
//         return state;
//     }
    
//     case "logout":
//         localStorage.removeItem("authState");
//         return initialState;
//     case "updateUser":
//         return {
//         ...state,
//         nombreUsuario: action.payload.nombreUsuario,
//         nombreEmail: action.payload.nombreContraseña,
//         };
//     default:
//         throw new Error(`Accion no reconocida: ${action.type}`);
//     }
// };


// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//     const [state, dispatch] = useReducer(reducer, initialState);

//     return (
//         <AuthContext.Provider value={{ state, dispatch }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };


import { createContext, useState } from "react";


export const AuthContext = createContext();

const AuthContextProvider = ( {children} ) => {


    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");


    const handleLogout = () => {
        setEmail("");
        setPassword("");
        localStorage.removeItem("logged");
        localStorage.removeItem("email");
        localStorage.removeItem("password");
        window.location.reload();
    };

    const data = {
        email,
        setEmail,
        password,
        setPassword,
        handleLogout
    }

    return (
        <AuthContext.Provider value={data}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;


