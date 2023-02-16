const mongoose = require('mongoose');

async function connect(){
    return await mongoose.connect(process.env.DB_URI);
}

connect()
.then(res=> console.log(res))
.catch(err=> console.log(err))