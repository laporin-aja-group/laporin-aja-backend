const router = require("express").Router()

router.get("/", require("./controller").getAllRports);
router.get("/id/:id", require("./controller").getById);
router.get("/email/:email", require("./controller").getByEmail);
router.get("/:email/:process", require("./controller").getByProcess);
router.post("/", require("./controller").addReports);
router.delete("/:id", require("./controller").deleteOne);
router.put("/:id", require("./controller").updateOne);

module.exports = router