const express = require("express");
const connectDB = require("../db/connection.js");

const router = express.Router();

router.get("/load-schedule-db", async (req, res) => {
  try {
    const client = await connectDB();
    const db = client.db('application')
    const collection = db.collection('users')
  
    const query = { email: req.body["email"] }
    const data = await collection.findOne(query)

    res.status(200).json({ data: data })
  } catch (err) {
    res.status(404).send("Error: something went wrong while fetching data.")
  }
  
});

module.exports = router;
