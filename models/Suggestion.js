const mongoose = require("mongoose")
const Schema = mongoose.Schema

const suggestionSchema = new Schema ({
    name: {
        type : String,
        required: true
    },    
    email: {
        type : String,
        required: true
    },
    suggestion: {
        type : String,
        required: true
    }
})

const Suggestion = mongoose.model("suggestion", suggestionSchema)
module.exports = Suggestion;