const mongoose = require("mongoose")
const Schema = mongoose.Schema

const reportUserSchema = new Schema ({ //problem, suggestion, location, description
    problem: {
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
    created_at : {
        type: Date,
        required: true,
        default: Date.now
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: "users"
    }
});

const ReportsUsers = mongoose.model("reports-users", reportUserSchema)

module.exports = ReportsUsers;