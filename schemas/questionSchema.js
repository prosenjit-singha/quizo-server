const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  options: [String],
  question: String,
  correctAnswer: String,
});

module.exports = questionSchema;
