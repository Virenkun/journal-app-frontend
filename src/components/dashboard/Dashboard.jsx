import Card from "../card/Card";
import { useAuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import { getJournal } from "../../service/journalService/journalService";
import { useEffect } from "react";
import { useState } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import { verifyToken } from "../../service/userService/userservice";

function Dashboard() {
  const { isAuthenticated, userId } = useAuthContext();
  const [journals, setJournals] = useState([
    {
      title: "",
      content: "",
    },
  ]);

  useEffect(() => {
    verifyToken(JSON.parse(localStorage.getItem("accessToken")))
      .then((response) => {
        console.log("AUTH CONTECT RES", response);
        getJournal(response.userId)
          .then((data) => {
            setJournals(data);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log("USERID", userId);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="flex">
        <div>
          <Sidebar />
        </div>
        <div className="mx-10 my-10 flex flex-warp gap-5">
          {journals &&
            journals.map((journal, index) => (
              <Card
                key={index}
                title={journal.title}
                content={journal.content}
              />
            ))}
          {!journals && <p>No journals available</p>}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
