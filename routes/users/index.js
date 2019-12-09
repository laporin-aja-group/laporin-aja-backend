const router = require("express").Router()

router.get("/", require("./controller").getAllUsers)
router.post("/", require("./controller").addUsers)
router.post("/login", require("./controller").login)

module.exports = router