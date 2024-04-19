
const TodoModel = require('../models/TodoModel')

const allsController = async (req ,res)=>{
  try{
    const {title, done, userId} =  req.body
    console.log(title, done, userId)
    const todo = await TodoModel.create({title, done, userId})
    res.status(200).json({
      status:'success',
      data:todo
    })
  }catch(err){
    res.send(err.message)
  }
}


module.exports =allsController