const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const quotesRouter = require("./routers/quotes");
const docsRouter = require("./routers/docs");

dotenv.config({ path: "config/config.env" });

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("views", path.join(__dirname, "public/views"));
app.set("view engine", "html");

app.use(express.json());

//Routers
app.use("/api/v1/quotes", quotesRouter);
app.use("/api/v1/docs", docsRouter);

module.exports = app;
