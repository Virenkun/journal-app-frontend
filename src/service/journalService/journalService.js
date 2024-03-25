import axios from "axios";

export const getJournal = async (userId) => {
  try {
    const res = await axios.get(`http://localhost:8081/api/journal/${userId}`);
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const createJournal = async (journal, userId) => {
  try {
    const res = await axios.post(
      `http://localhost:8081/api/journal/${userId}`,
      journal,
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export const deleteJournal = async (journalId) => {
  try {
    const res = await axios.delete(
      `http://localhost:8081/api/journal/${journalId}`,
    );
    return res.data;
  } catch (err) {
    console.log(err);
  }
};
