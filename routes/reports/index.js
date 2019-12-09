const router = require("express").Router()

router.get("/", require("./controller").getAllRports)
router.post("/", require("./controller").addReports)

module.exports = router