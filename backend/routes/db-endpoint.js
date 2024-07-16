const express = require("express");
const connectDB = require("../db/connection.js");

const router = express.Router();

router.post("/load-schedule-db", async (req, res) => {
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


router.put("/save-schedule-db", async (req, res) => {
  try {
    const client = await connectDB();
    const db = client.db('application')
    const collection = db.collection('users')

    const filter = { email: req.body["email"] }
    const update = {
      $set: {
        email: req.body["email"],
        lastUpdated: (new Date()).toUTCString(),
        scheduleA: req.body["scheduleA"],
        scheduleB: req.body["scheduleB"],
        scheduleC: req.body["scheduleC"],
      }
    }
    const options = { upsert: true };

    const result = await collection.updateOne(filter, update, options)

    res.status(200).send("Data update success!")
  } catch (err) {
    res.status(404).send("Error: something went wrong while updating data.")
  }
})


module.exports = router;
