const { text } = require("express");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("../db/connection");

const contactSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  subject: {
    type: String,
  },

  message: {
    type: String,
  },
});

const student = new mongoose.model("student", contactSchema);

module.exports = student;
