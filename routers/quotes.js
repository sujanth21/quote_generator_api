const express = require("express");
const router = express.Router();

const { addQuote, getQuotes } = require("../controllers/quotes");

router.route("/").get(getQuotes).post(addQuote);

module.exports = router;
