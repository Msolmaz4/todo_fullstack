
const TodoModel = require('../models/TodoModel')

const alls = async (req ,res)=>{
  try{
 
    const todoslar= await TodoModel.find({})
    console.log(todoslar,"todoslar")
    res.status(200).json({
      status:'success',
      data:todoslar
    })
  }catch(err){
    res.send(err.message)
  }
}


module.exports =alls