const express = require("express")
const app = express()
const PORT = 8000
const cors = require('cors')
app.use(cors())



app.use(express.json())
app.use(express.urlencoded({extended:true}))
const userRouter = require("./routes/userRouter")
const todoRouter = require("./routes/todoRouter")
require("./db/db")

const bodyParser = require('body-parser');

app.get("/",(req,res)=>{
    res.send("hello world")
})
app.use('/todos',todoRouter)
app.use('/user',userRouter)


app.listen(PORT,()=>{
    console.log(`${PORT} dinleniyor`)
})