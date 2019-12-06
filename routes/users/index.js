const router = require("express").Router()

router.get("/", require("./controller").getAllUsers)
router.post("/", require("./controller").addUsers)

module.exports = router