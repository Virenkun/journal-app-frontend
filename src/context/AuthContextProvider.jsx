import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import { isLoggedIn } from "../auth/auth";
import { verifyToken } from "../service/userService/userservice";

import PropTypes from "prop-types";

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    setIsAuthenticated(isLoggedIn());
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      verifyToken(JSON.parse(localStorage.getItem("accessToken")))
        .then((response) => {
          setUserId(response.id);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  });

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
