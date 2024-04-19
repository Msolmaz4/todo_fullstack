



const TodoList = ({data,setData}) => {
  

  const handleDone = (index) => {
    const newTodos = [...data];
    newTodos[index].done = !newTodos[index].done;
    setData(newTodos);
  }
const silme =async (id)=>{
     
}
  return (
    <div>

    {data?.map((item,i)=>(
      <div key={i} style={{marginTop:"15px",gap:"25px"}}> 
      
      {item.title}
      <button onClick={()=>silme(item.id)}>sil</button>
      <button 
            style={{background : item.done ? "green" :"red"}}  
            onClick={() => handleDone(i)}
          >    yapildi
          </button>
      </div>
    ))}
    </div>
  )
}

export default TodoList