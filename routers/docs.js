const express = require("express");
const router = express.Router();

const { getDocs } = require("../controllers/docs");

router.route("/").get(getDocs);

module.exports = router;
