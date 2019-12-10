const mongoose = require("mongoose")
const Schema = mongoose.Schema

const reportSchema = new Schema ({ //problem, suggestion, location, description
    problem: {
        type: String,
        required: true
    },
    suggestion: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    process: {
        type: String,
        required: true
    },
    note : {
        type: String,
        required: true
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "users"
    }
});

const Reports = mongoose.model("reports", reportSchema)

module.exports = Reports;