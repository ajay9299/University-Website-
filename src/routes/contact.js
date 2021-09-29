const express = require("express");
const app = express();
const router = new express.Router();
const bodyParser = require("body-parser");
require("../db/connection");
const student = require("../models/C_form");
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

router.get("/contact", (req, res) => {
  res.render("contact");
});

router.post("/contact", async (req, res) => {
  try {
    const data = new student({
      name: req.body.name,
      email: req.body.email,
      subject: req.body.subject,
      message: req.body.message,
    });

    const finaldata = await data.save();
    res.status(201).render("index");
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
