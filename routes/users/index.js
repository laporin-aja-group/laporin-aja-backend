const router = require("express").Router()

router.get("/", require("./controller").getAllUsers)
router.post("/", require("./controller").addUsers)
router.post("/login", require("./controller").login)
router.post("/checkpassword", require("./controller").checkPassword)
router.put("/update-password/:id", require("./controller").setPassword)
router.put("/update-user/:id", require("./controller").updateOne)

module.exports = router