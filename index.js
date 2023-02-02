require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const quizHandler = require("./routes/quizHandler.js");

const app = express();
app.use(cors());
app.use(express.json());

const port = process.env.PORT || 5000;

/* CONNECTING DATABASE WITH MONGOOSE */
mongoose.set("strictQuery", false);
mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER_NAME}:${process.env.DB_USER_PASS}@cluster0.0hl8m1y.mongodb.net/quizo?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
    }
  )
  .then(() => console.log("Successfully connected with database!"))
  .catch((err) => console.log(err));

app.use("/quiz", quizHandler);

app.get("/", (_req, res) => {
  res.send("Server running...");
});
/************* 404 ERROR HANDLER *************/
app.use((_req, _res, next) => {
  next("Requested URL was not found!");
});

/************* CUSTOM ERROR HANDLER *************/
app.use((err, req, res, next) => {
  if (req.headersSent) {
    next("There was a problem!");
  } else {
    if (err.message) {
      res.status(500).send(err.message);
    } else {
      res.status(500).send("There was a problem in server!");
    }
  }
});

app.listen(port, () => console.log("Server is running on port -", port));
