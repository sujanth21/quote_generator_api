const express = require("express");
const router = express.Router();

const { addQuote, getQuotes, getQuote } = require("../controllers/quotes");

router.route("/").get(getQuotes).post(addQuote);

router.route("/:id").get(getQuote);

module.exports = router;
