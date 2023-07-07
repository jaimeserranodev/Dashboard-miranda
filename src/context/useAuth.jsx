import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";

export const useAuth = () => {
    const { authState } = useContext(AuthContext);
    const isLoggedIn = authState.isLoggedIn;
    const email = authState.email;
    const password = authState.password;

    console.log("useAuth values:", { isLoggedIn, email, password });

    return { isLoggedIn, email, password };
};