import Card from "../card/Card";
import { useAuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";
import { getJournal } from "../../service/journalService/journalService";
import { useEffect } from "react";
import { useState } from "react";
import { Sidebar } from "../sidebar/Sidebar";
import { verifyToken } from "../../service/userService/userservice";

function Dashboard() {
  const { isAuthenticated, userId, journals, setJournals } = useAuthContext();

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
  }, [setJournals]);

  console.log("USERID", userId);

  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <div className="flex">
        <div className="">
          <Sidebar />
        </div>
        <div className="py-10 h-max flex flex-wrap gap-5">
          {journals &&
            journals.map((journal, index) => (
              <div key={index} className="">
                <Card
                  key={index}
                  title={journal.title}
                  content={journal.content}
                  journalId={journal.id}
                />
              </div>
            ))}
          {!journals && <p>No journals available</p>}
        </div>
      </div>
    </>
  );
}

export default Dashboard;
