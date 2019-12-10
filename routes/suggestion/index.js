const router = require("express").Router()

router.get("/", require("./controller").getAllSuggest)
router.post("/", require("./controller").addSuggestion)

module.exports = router;