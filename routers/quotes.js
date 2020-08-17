const express = require("express");
const router = express.Router();

const {
  addQuote,
  getQuotes,
  getQuote,
  getRandomQuote,
  updateQuote,
} = require("../controllers/quotes");

router.route("/").get(getQuotes).post(addQuote);
router.route("/random").get(getRandomQuote);
router.route("/:id").get(getQuote).put(updateQuote);

module.exports = router;
