import { AuthContext } from "./AuthContext";
import { useEffect, useState } from "react";
import { isLoggedIn } from "../auth/auth";
import { verifyToken } from "../service/userService/userservice";

import PropTypes from "prop-types";

export const AuthContextProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState("");
  const [journals, setJournals] = useState([
    {
      title: "",
      content: "",
    },
  ]);

  useEffect(() => {
    setIsAuthenticated(isLoggedIn());
  }, []);

  useEffect(() => {
    verifyToken(JSON.parse(localStorage.getItem("accessToken")))
      .then((response) => {
        console.log("AUTH CONTECT RES", response);
        setUserId(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        setIsAuthenticated,
        userId,
        journals,
        setJournals,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
