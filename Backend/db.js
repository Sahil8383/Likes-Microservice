const mongoose = require("mongoose");

const connectDB = async () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("Connected to Mongo!");
    })
    .catch((err) => {
      console.error("Error connecting to Mongo", err);
    });
};

module.exports = connectDB;
