const router = require("express").Router();

router.use("/deposit-request", require("./deposit-request"));

module.exports = router;
