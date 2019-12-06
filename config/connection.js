const mongoose = require("mongoose")
const {DATABASE_HOST_LIVE} = require("./environment")

mongoose.connect(DATABASE_HOST_LIVE, {
    useUnifiedTopology: true,
    useNewUrlParser : true
}).then(() => {
    console.log("Connected to database");
}).catch(error => {
    console.log("Error cant connect to database");
    
});

const db  = mongoose.connection
module.exports = db