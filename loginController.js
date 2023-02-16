const User = require('../models/userModel');


const inserValue = async (req, res) => {
    console.log(req.body);

    try {
        const email = req.body.email;
        const password = req.body.password;

        const user = await User.find({ email }).exec();

        console.log(user,"user");

        if (user == null) {
            return res.send("Invalid user")
        }

        console.log(user.password);        
        if (req.body.password == user.password) {
            res.send("Login successfully")
        }
        else {
            res.send("Invalid user")
        }

    } catch (error) {
        console.log(error);
        res.send("Invalid user")

    }

}


module.exports = {
    inserValue
}