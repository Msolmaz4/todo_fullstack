
import { useSelector } from "react-redux"
import { Outlet } from "react-router-dom"
import Home from "../Home"

const Index = () => {
  const userData = useSelector((state) => state.user.userData)
  console.log(userData)

  return (
    <div>
         {userData ? <Outlet/> :<Home/>}  
    </div>
  )
}

export default Index
