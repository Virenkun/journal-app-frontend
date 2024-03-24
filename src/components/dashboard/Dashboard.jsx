import Card from "../card/Card"
import { useAuthContext } from "../../context/AuthContext"
import { Navigate } from "react-router-dom";


function Dashboard() {

  const { isAuthenticated } = useAuthContext();

  if (!isAuthenticated) {
    return (
      <Navigate to="/login" />
    )
  }

  
  return (
    <>
    <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Dashboard</h1>
    <div className="mx-20 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    </div>
    
    </>

  )
}

export default Dashboard