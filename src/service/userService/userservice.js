import axios from "axios";

export const signUp =(user) => {
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

