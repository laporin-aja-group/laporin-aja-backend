const express = require("express")
const router = express.Router()

router.get("/", (req, res) => {
    res.send({message: "Welcome to laporin aja api with mongodb"})
})

module.exports = router;