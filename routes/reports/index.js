const router = require("express").Router()

router.get("/", require("./controller").getAllRports);
router.get("/id/:id", require("./controller").getById);
router.get("/search/:email", require("./controller").getInSearch);
router.get("/search-problem", require("./controller").getAllProblemSearch)
router.get("/search-location", require("./controller").getAllLocationSearch)
router.get("/email/:email", require("./controller").getByEmail);
router.get("/process/:email/:process", require("./controller").getByProcess);
router.post("/", require("./controller").addReports);
router.delete("/:id", require("./controller").deleteOne);
router.put("/:id", require("./controller").updateOne);

module.exports = router