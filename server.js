if (process.env.NODE_ENV != "production") {
  require("dotenv").config();
}

const GOOGLE_API_KEY = process.env.GOOGLE_API_KEY;
const express = require("express");
const app = express();

app.use(express.json());
app.use(express.static("public"));

app.post("/maps", (req, res) => {});

app.listen(3000, () => {
  console.log("Server Started");
});

//console.log(GOOGLE_API_KEY);
