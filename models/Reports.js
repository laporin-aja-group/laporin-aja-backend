const mongoose = require("mongoose")
const Schema = mongoose.Schema

const reportSchema = new Schema ({ //problem, suggestion, location, description
    problem: {
        type: String,
        required: true
    },
    problemSolving: {
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
    image: {
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
    created_at : {
        type: Date,
        required: true,
        default: Date.now
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "users"
    },
    nameAdminHandling:{
        type: String
    },
    noHpAdminHandling:{
        type: String
    }
});

const Reports = mongoose.model("reports", reportSchema)

module.exports = Reports;