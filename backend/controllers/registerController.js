const Users = require('../models/UserModel')
const bcrypt = require('bcrypt')


const registerController = async (req,res)=>{
    try{
        const { email,password,name} = req.body
        console.log(email,password,name)
        if(!email || !password || !name  ) return res.send('please fiil inre')
        const emailControl =await Users.findOne({email:email})
        if(emailControl) return res.send('this user is already ')
        const newUser = await new Users({
            name:name,
            email:email,
            password:bcrypt.hashSync(password,8)
        })
        newUser.save()
        .then(()=>res.status(200).send('sucess'))
        .catch((err)=>res.send('sve errror'))

    }catch(err){
        console.log(err.message)
        res.send(err.message)
    }

}
module.exports = registerController