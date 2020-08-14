const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config({ path: "config/config.env" });

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});
