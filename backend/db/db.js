const mongoose = require('mongoose')


const main = () =>{
    mongoose.connect('mongodb+srv://deneme12:Azxs12345@cluster0.wpuxx.mongodb.net/tododersgithub', {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }) 
    .then(console.log('connect to the db success'))
    .catch(err => console.log(err))
}

main()