import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import { isLoggedIn } from "../auth/auth";
import PropTypes from "prop-types";

export const AuthContextProvider = ({ children }) => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(() => {
        console.log("AuthContextProvider");
        setIsAuthenticated(isLoggedIn());
    }, []);

    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated}}>
            {children}
        </AuthContext.Provider>
    );
};

AuthContextProvider.propTypes = {
    children: PropTypes.node.isRequired,
};