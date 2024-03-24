import axios from "axios";

export const setAccessToken = (token) => {
    localStorage.setItem("accessToken", JSON.stringify(token));
    };

export const isLoggedIn = () => {
    if (localStorage.getItem("accessToken")) {
        return true;
    }
    return false;
    };

export const logOut = () => {
    localStorage.removeItem("accessToken");
    window.location.reload();
    console.log("logged out");
    };


    export const getUserId = () => {
        const token = JSON.parse(localStorage.getItem("accessToken"));
        console.log(token);
        return axios.post("http://localhost:8081/api/auth/verify-token", { accessToken:token }).then((response) => {
            return response.data;
        }
        ).catch((error) => {
            console.log(error);
        });
        }