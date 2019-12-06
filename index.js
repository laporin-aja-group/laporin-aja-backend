const express = require("express")
const app = express()
const cors = require("cors")
const bodyParser = require("body-parser")
const {PORT, db} = require("./config")

app.use(cors())
app.use(bodyParser.urlencoded({extended : true}))
app.use(bodyParser.json())

app.use("/", require("./routes"))

if (db) {
    app.listen(PORT, () => {
        console.log(`Running on port ${PORT}`);
        
    })
}