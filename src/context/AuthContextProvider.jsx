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

  // const [userDetails, setUserDetails] = useState({});

  // useEffect(() => {
  //     if (isAuthenticated) {
  //         verifyToken(localStorage.getItem("accessToken"))
  //             .then((res) => {
  //                 setUserDetails(res);
  //             })
  //             .catch((err) => {
  //                 console.log(err);
  //             });
  //     }
  // });

  return (
    <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};

AuthContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
