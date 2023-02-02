const mongoose = require("mongoose");
const questionSchema = require("./questionSchema.js");

const quizSchema = new mongoose.Schema({
  total: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  logo: {
    type: String,
    required: true,
  },
  questions: {
    type: [questionSchema],
    required: true,
  },
});

module.exports = quizSchema;
