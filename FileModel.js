const mongoose =require('mongoose');
const Schema =mongoose.Schema;

const FileSchema = new Schema({
    name:String,
    path:String,
    password:String

});

const FileModel = mongoose.model('Filedetails',FileSchema);

module.exports = FileModel;