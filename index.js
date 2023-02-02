require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const port = process.env.PORT || 5000;

/************* 404 ERROR HANDLER *************/
app.use((_req, _res, next) => {
  next("Requested URL was not found!");
});

/************* UNIVERSAL ERROR HANDLER *************/
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

app.listen(port, () => console.log("Server is running on port - ", port));
