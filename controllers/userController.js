// importing Schema first

const  User = require('../models/userSchema.js');

exports.registerUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        if(!name || !email || !password) {
            throw new Error("All fields are required");
        }

        const user = await User.create({
            name,
            email,
            password
        })

        res.status(200).json({
            success: true,
            message: "User Registered Successfully"
        })


    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}

exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Checking if email exists in database
        const userExist = await User.findOne({email});
        if(userExist) {
            if(userExist.password == password) {
                res.status(200).json({
                    success: true,
                    message: "User Logged In Successfully"
                })
            } else {
                res.status(400).json({
                    success: false,
                    message: "Wrong Password !"
                })
            }
        } else {
            res.status(400).json({
                success: false,
                message: "User does not exist"
            })
        }


    } catch (error) {
        console.log(error);
        res.status(400).json({
            success: false,
            message: error.message
        })
    }
}