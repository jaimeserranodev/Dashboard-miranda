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
