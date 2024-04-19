import { useEffect, useState } from "react"
import TodoList from "./TodoList"
import { useDispatch, useSelector } from "react-redux"
import { todos, todosl } from "../../redux1/todoSlice"



const Todo = () => {
  const dispatch = useDispatch()
  const [data,setData] = useState([]) 
  const [input,setInput] = useState("")
  const {todoss} = useSelector(state=>state.todo)
  console.log(todoss,"todo gelen")
  const {userData} = useSelector((state)=>state.user)
 console.log(userData._id)
  const ekleme = async () => {
    const newTodo = {userId: userData._id, title: input, done:false};
    setData(prevData => [...prevData, newTodo]); 
    setInput("")
    console.log(data, "data")
    await dispatch(todos(newTodo))
  }
  
  useEffect(() => {
    dispatch(todosl())
    
}, [])

useEffect(() => {
  if (Array.isArray(todoss) && data.length === 0) {
    todoss.map((item) => {
      if (item.userId == userData._id) {
        // Verinin zaten eklenip eklenmediğini kontrol et
        const isItemAdded = data.some((dataItem) => dataItem._id === item._id);

        if (!isItemAdded) {
          // Eğer veri daha önce eklenmemişse, ekleyin
          setData((prevData) => [...prevData, item]);
        }
      }
    });
  }
}, [todoss, data]);









  return (
    <div style={{display:"flex" , justifyContent:"center" ,alignItems:"center",flexDirection:"column"}}>
    <div> <h2>Todo </h2> </div>
     
      <div><input placeholder="data" value={input} onChange={(e)=>setInput(e.target.value)}/> 
      <button onClick={()=>ekleme()}>Add</button> </div>
      <div>
        <TodoList data={data} setData={setData} />  
      </div>
      
    </div>
  )
}

export default Todo
