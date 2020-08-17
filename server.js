const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const quotesRouter = require("./routers/quotes");

dotenv.config({ path: "config/config.env" });

const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());

//Routers
app.use("/api/v1/quotes", quotesRouter);

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
