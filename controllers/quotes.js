const mongoose = require("mongoose");
const Quote = require("../models/Quote");

const db = require("../config/db");

// @desc    Add new quote to database
// @route   POST /api/v1/quotes
// @access  Private
exports.addQuote = async (req, res, next) => {
  const quote = req.body;

  try {
    const newQuote = await Quote.create(quote);

    res.status(201).json({
      success: true,
      data: newQuote,
    });
  } catch (e) {
    res.status(400).json({
      success: false,
      error: e,
    });
  }
};

// @desc    Get all quotes from the database
// @route   GET /api/v1/quotes
// @access  Public
exports.getQuotes = async (req, res, next) => {
  try {
    const quotes = await Quote.find({});

    res.status(200).json({
      success: true,
      count: quotes.length,
      data: quotes,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e,
    });
  }
};

// @desc    Get single quote using an ID
// @route   GET /api/v1/quotes/:id
// @access  Public
exports.getQuote = async (req, res, next) => {
  const _id = req.params.id;
  try {
    const quote = await Quote.findById(_id);

    if (!quote) {
      return res.status(404).json({
        success: false,
        error: "Quote not found",
      });
    }

    res.status(200).json({
      success: true,
      data: quote,
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e,
    });
  }
};

// @desc    Get a randon quote
// @route   GET /api/v1/quotes/random
// @access  Public
exports.randomQuote = async (req, res, next) => {
  let random;

  try {
    const quotes = await Quote.find({});

    random = Math.floor(Math.random() * quotes.length);

    res.status(200).json({
      success: true,
      data: quotes[random],
    });
  } catch (e) {
    res.status(500).json({
      success: false,
      error: e,
    });
  }
};
