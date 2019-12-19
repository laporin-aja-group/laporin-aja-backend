const {Users} = require("../../models")
const { JWT_SECRET_KEY } = require("../../config")
const { hashPassword, comparedPassword } = require("../../helpers")
const jwt = require("jsonwebtoken")
const objectId = require("mongodb").ObjectId

module.exports = {
    getAllUsers: async(req, res) => {
        try {

            const result = await Users.find({})

            res.status(200).json({message: "Show all users", data: result})

        } catch (error) {
            console.log(error);
        }
    },
    getOneUser: async(req, res) => {
        try {

            const result = await Users.find({ _id: objectId(req.params.id) }).populate("user")

            res.status(200).json({message: `Show all users by id ${req.params.id}`, data: result})

        } catch (error) {
            console.log(error);
        }
    },
    addUsers: async(req, res) => {
        const hash = await hashPassword(req.body.password);
        try {
            const result = await Users.create({ ...req.body, password: hash})
            
            res.status(201).json({message: "Data users successfully added", data: result})
        } catch (error) {
            console.log(error);
        }
    },
    setPassword : async(req, res) => {

        const {id} = req.params;
        const hash = await hashPassword(req.body.password);

        try {

            const result = await Users.update({ _id : objectId(id) }, {$set : { password : hash}})

            res.status(200).json({message: `Data succesfully update with id ${id}`, data: result})

        } catch (error) {
            console.log(error);
        }
    },
    login: async(req, res) => {
        try {
            const result = await Users.findOne({ email: req.body.email })
            
            if (result) {
                await Users.findOne({ email: req.body.email })
                            .then(async response => {
                                console.log(response);
                                
                                    const compared = await comparedPassword(
                                        req.body.password,
                                        response.password
                                    );
                            
                                    if (compared === true) {
                                        const { email, fullName, _id, role } = response;
                                        const token = jwt.sign({
                                        email, fullName, _id, role
                                        }, JWT_SECRET_KEY)
                                        res.status(200).json({
                                        message: "Login successfull",
                                        data: { token }
                                        });
                                    } else {
                                        res.send({message: 'Password is wrong!'})
                                    }
                            })
                } else {
                    res.send({message: 'Email not registered! please register'})
                }
        } catch (error) {
            console.log(error);
        }
    },
    checkPassword : async(req, res) => {
        try {
            const result = await Users.findOne({ email: req.body.email })
            
            if (result) {
                await Users.findOne({ email: req.body.email })
                            .then(async response => {
                                console.log(response);
                                
                                    const compared = await comparedPassword(
                                        req.body.password,
                                        response.password
                                    );
                            
                                    if (compared === true) {
                                        res.status(200).json({
                                        message: "The password you entered is correct"
                                        });
                                    } else {
                                        res.send({message: 'The password you entered is incorrect!'})
                                    }
                            })
                } else {
                    res.send({message: 'Email not registered!'})
                }
        } catch (error) {
            console.log(error);
        }
    },
    updateOne: async(req, res) => {
        const {id} = req.params;

        if (req.body.password) {
            const hash = await hashPassword(req.body.password);
            Object.assign(req.body,{password:hash})    
        }
            
        try {
            const result = await Users.update({ _id : objectId(id) }, {$set : { ...req.body}})            

            res.status(200).json({message: `Data succesfully update with id ${id}`, data: result})
        } catch (error) {
            console.log(error);
        }
    }
}

