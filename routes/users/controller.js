const {Users} = require("../../models")
const { JWT_SECRET_KEY } = require("../../config")
const { hashPassword, comparedPassword } = require("../../helpers")
const jwt = require("jsonwebtoken")

module.exports = {
    getAllUsers: async(req, res) => {
        try {

            const result = await Users.find({})

            res.status(200).json({message: "Show all users", data: result})

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
    }
}

