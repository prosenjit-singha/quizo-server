const express = require("express");
const mongoose = require("mongoose");
const router = express.Router();
const quizSchema = require("../schemas/quizSchema");

const Quiz = new mongoose.model("quiz", quizSchema);
// GET ALL TOPICS
router.get("/", async (_req, res) => {
  try {
    const quiz = await Quiz.find({});
    res.send(quiz);
  } catch (err) {
    console.error(err);
    res.sendStatus(500);
  }
});

// GET A PARTICULAR QUIZ
router.get("/:id", async (req, res) => {});

module.exports = router;
