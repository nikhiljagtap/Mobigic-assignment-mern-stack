const express=require('express')
const loginroute =express.Router()

const loginC=require('../Controllers/loginController')

loginroute
.post('/',loginC.inserValue)



module.exports = loginroute;