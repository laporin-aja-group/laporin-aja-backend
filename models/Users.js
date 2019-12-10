const mongoose = require("mongoose")
const Schema = mongoose.Schema

const userSchema = new Schema ({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
         required: true
    },
    phoneNumber: {
        type: String,
         required: true
    },
    password: {
        type: String,
         required: true
    }, 
    role: {
        type: String,
        required: true
    }
})

const Users = mongoose.model("users", userSchema)
module.exports = Users;