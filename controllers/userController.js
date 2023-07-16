const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user')

const signup = async (req, res) => {

    const {email, name, password} = req.body;
    try {
        const existingUser = await User.findOne({email: email});
        if(existingUser){
            return res.status(400).json({
                message: "User already exists"
            })
        }
        const hashedPassword = await bcrypt.hash(password, 10);

        const result = await User.create({
            name: name,
            email: email,
            password: hashedPassword
        })

        const token = jwt.sign({email: result.email, id: result._id}, process.env.SECRET_KEY);
        res.status(201).json({
            user: result,
            token: token
        })


    } catch (error) {
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    }
};

const login = async (req, res) => {
    const {email, password} = req.body;
    try {
        
        const existingUser = await User.findOne({email: email});
        if(!existingUser){
            return res.status(404).json({
                message: "User not found"
            });
        };

        const matchPassword = await bcrypt.compare(password, existingUser.password);

        if(!matchPassword){
            return res.status(400).json({message:"Invalid Credentials"})
        }

        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, process.env.SECRET_KEY, {expiresIn: "1h"});
        res.status(200).json({
            user: existingUser,
            token: token
        })

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "something went wrong"});
    }

};

module.exports = { signup, login};