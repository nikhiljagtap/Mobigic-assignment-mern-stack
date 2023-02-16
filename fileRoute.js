 const express=require('express')

 const fileroute=express.Router()

const fileC = require('../Controllers/fileController')
 
fileroute
.post('/',fileC.inser)


 module.exports = fileroute;

