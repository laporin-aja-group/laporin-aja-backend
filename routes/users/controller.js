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
    }
}