const express = require("express");
const router = express.Router();

const twitterRouter = require("./twitter");

router.use("/twitter", twitterRouter);

module.exports = router;
