const Users =require('../models/UserModel')
const bcrypt = require('bcrypt')
const jwt =require('jsonwebtoken')

const loginController = async (req,res) =>{

    try{
        const {email , password} =req.body
        console.log(email,password,"logincontrol")
        if(!email || !password ) return res.send('plesa fiil in the')
        const emailControl = await Users.findOne({email:email})
        if(!emailControl) return res.status(400).send('no user with this email')
        const passwordMatch = bcrypt.compareSync(password,emailControl.password)
        if(!passwordMatch) return res.status(400).send('wrogn password')
        
        
     
        res.status(200).json({
            message:'succes',
            data:emailControl,
            
        })
    }catch(err){
        res.send(err.message)
        console.log(err.message)
    }

}
module.exports = loginController