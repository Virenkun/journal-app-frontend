import axios from "axios";

export const signUp = (user) => {
  return axios
    .post("http://localhost:8081/api/auth/signup", user)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const logIn = (user) => {
  return axios
    .post("http://localhost:8081/api/auth/login", user)
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};

export const verifyToken = (accessToken) => {
  return axios
    .post("http://localhost:8081/api/auth/verify-token", {
      accessToken: accessToken,
    })
    .then((response) => {
      console.log(response.data);
      return response.data;
    })
    .catch((error) => {
      console.log(error);
      return error;
    });
};
