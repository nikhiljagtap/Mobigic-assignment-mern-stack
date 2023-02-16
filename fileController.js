const multer = require('multer')

 const fileM = require('../models/FileModel');

const storage = multer.diskStorage({
  destination: function (_req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (_req, file, cb) {

    cb(null, file.originalname)
  }
})

const upload = multer({ storage: storage }).single('path') 


const inser= async function(req, res){

  console.log(req.body);

  upload(req, res,  async function (err) {

    if (err instanceof multer.MulterError) {
      console.log(err);
    } else if (err) {
      console.log(err);
    }
    console.log(req.body.file);
    res.send({msg : 'OK'});
  
  })

  

    try {
      const filedata = {
        name: req.body.file.originalname,
        path: req.body.file.path,
        password: req.body.password
      }
      

      console.log("filedata",filedata);

      const record = await new fileM(filedata);
      console.log("record" ,record);
      record.save();
      res.send({ msg: "File uploaded successfully" })


    } catch (error) {

    }

  
}

module.exports = {
  inser
}