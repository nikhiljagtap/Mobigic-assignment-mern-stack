const express=require('express')
const userroute =express.Router()

const userC=require('../Controllers/userController')

userroute
.post('/register',userC.inserValue)



module.exports = userroute;