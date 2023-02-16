const express = require('express');
const bodyparser = require('body-parser');
var cors = require('cors');
require('dotenv').config();
require('./DB/connection');

const userR=require('./Routes/userRoute');
const loginR=require('./Routes/LoginRoute');
const fileR=require('./Routes/fileRoute')
const app = express();
app.use(cors());

app.set('view engine','ejs');
app.use('/uploads',express.static('/uploads'))


app.use(bodyparser.urlencoded({extended:false}))
app.use(bodyparser.json())
app.use('/uploads', express.static('uploads'));
app.use('/user',userR)
app.use('/login',loginR)
app.use('/file',fileR)




app.listen(process.env.PORT,() => {
    console.log('Running');
})
