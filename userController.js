const userM=require('../models/userModel');


const inserValue=  async (req,res) =>{
    
    var userValues={
        name : req.body.name,
        email : req.body.email,
        password:req.body.password
    }
       
    
    const record= await new userM(userValues);
    record.save();

    res.send({msg:"Registered successfully"})

}


module.exports ={    
    inserValue    
}