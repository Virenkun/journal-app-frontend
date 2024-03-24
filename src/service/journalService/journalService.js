import axios from "axios";

export const getJournal = async (userId) => {
  return axios
    .get(`http://localhost:8081/api/journal/${userId}`)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const createJournal = async (journal, userId) => {
  return axios
    .post(`http://localhost:8081/api/journal/${userId}`, journal)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
