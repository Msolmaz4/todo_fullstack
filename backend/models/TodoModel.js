const mongoose = require("mongoose")


const TodoSchema = new mongoose.Schema({
    userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true
    },
   
    title:{
        type:String,
        required:true
    },
    done: {
        type:Boolean,
        default:false

    }


},{timestamps:true})
module.exports = mongoose.model("Todo",TodoSchema)