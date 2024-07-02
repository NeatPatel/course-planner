const { MongoClient } = require("mongodb");
require("dotenv").config();

const uri = process.env.DB_URI;

const connectDB = async () => {
  let client;
  try {
    client = new MongoClient(uri);
  } catch (err) {
    console.log("Error: could not make connection.");
    client = null
  }
  return client;
};

module.exports = connectDB;
