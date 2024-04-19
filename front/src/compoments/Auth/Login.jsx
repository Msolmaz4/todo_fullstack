import { Link, useNavigate } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
import { useDispatch, useSelector } from "react-redux"
import { useState } from "react"
import { loginUser } from "../../redux1/userSlice"




const Login = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const {userData} = useSelector((state)=>state.user)
  console.log(userData)
  const [data,setData] = useState({
 
    email:"",
    password:"" 
  })
const handle = (e)=>{
  setData({...data,[e.target.name]:e.target.value})
}
const dert = async() => {
  try {
    await dispatch(loginUser({...data}));
    if(userData.status === 200){
      alert("login successfull")
    }else{
      alert("login failed")
    }
    if(userData) {
      navigate("/user")
    }


  } catch (error) {
    console.error(error);
    
  }
}
  return (
    <div> 
<Navbar/>
    <div style={{display:'flex' ,justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"160px"}}>
      <input placeholder="email" name="email"  value={data.email} onChange={handle}/><br/>

    <input placeholder="password" name="password" value={data.password} onChange={handle}/><br/>
    <button onClick={()=>dert()}>Login</button>
      <div style={{marginTop:"10px",marginLeft:"5px"}}> 
      <Link to="/reset">
        <button>Reset Password</button>
      </Link>

      <Link to="/signup">
        <button>Signup</button>
      </Link></div>
        
    </div></div>
  )
}

export default Login