import { Link } from "react-router-dom"
import Navbar from "../Navbar/Navbar"
//import axios from "axios"
import { useDispatch } from "react-redux"
import { registerUser } from "../../redux1/userSlice"
import { useState } from "react"


const Register = () => {
const dispatch = useDispatch()


  // const dert = async()=>{
  //    await axios.post("http://localhost:8000/user/register",{
  //     name:"deneme8",
  //     email:"deneme87@gmail.com",
  //     password:"1234567898"
  //   })
  // }
  const [data,setData] = useState({
    name:"",
    email:"",
    password:"" 
  })
const handle = (e)=>{
  setData({...data,[e.target.name]:e.target.value})
}
  const dert =async()=>{

    await dispatch(registerUser(data))
  }
  return (
    <div>
    <Navbar/>
    <div style={{display:'flex' ,justifyContent:"center",alignItems:"center",flexDirection:"column",marginTop:"160px"}}>
    <input placeholder="name" name="name" value={data.name} onChange={handle}/><br/>
    <input placeholder="email" name="email"  value={data.email} onChange={handle}/><br/>

    <input placeholder="password" name="password" value={data.password} onChange={handle}/><br/>
    <button onClick={()=>dert()}>Register</button>
    <div style={{marginTop:"10px",marginLeft:"5px"}}> 
    <Link to="/reset">
      <button>Reset Password</button>
    </Link>

    <Link to="/register">
      <button>Signup</button>
    </Link></div>
      
  </div> </div>
  )
}

export default Register