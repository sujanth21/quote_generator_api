const express = require("express");
const router = express.Router();

const {
  addQuote,
  getQuotes,
  getQuote,
  randomQuote,
} = require("../controllers/quotes");

router.route("/").get(getQuotes).post(addQuote);
router.route("/random").get(randomQuote);
router.route("/:id").get(getQuote);

module.exports = router;
