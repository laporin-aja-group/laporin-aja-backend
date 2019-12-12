const router = require("express").Router()

router.get("/", require("./controller").getAllRports);
router.get("/:email", require("./controller").getByEmail);
router.post("/", require("./controller").addReportsUser);
router.delete("/:id", require("./controller").deleteOne);
router.put("/:id", require("./controller").updateOne);

module.exports = router