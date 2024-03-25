import axios from "axios";

export const signUp = async (user) => {
  try {
    const response = await axios.post(
      "http://localhost:8081/api/auth/signup",
      user,
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const logIn = async (user) => {
  try {
    const response = await axios.post(
      "http://localhost:8081/api/auth/login",
      user,
    );
    return response.data;
  } catch (error) {
    console.log(error);
    return error;
  }
};

export const verifyToken = async (accessToken) => {
  return axios
    .post("http://localhost:8081/api/auth/verify-token", {
      accessToken: accessToken,
    })
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};

export const getUser = async (userId) => {
  return await axios
    .get(`http://localhost:8081/api/user/${userId}`)
    .then((response) => {
      return response.data;
    })
    .catch((error) => {
      console.log(error);
    });
};
