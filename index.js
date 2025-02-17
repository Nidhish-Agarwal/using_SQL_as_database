const express = require("express");
const mysql = require("mysql2");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT;

const db = mysql.createConnection({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

db.connect((er) => {
  if (er) {
    console.log("Error connecting to the DB", er.message);
    return;
  }

  console.log("Successfully Connected to DB");
});

app.get("/", (req, res) => {
  res.send("The server is running sucessfully");
});

app.listen(PORT, () => {
  console.log(`Server is listening on port:${PORT}, http://localhost:${PORT}`);
});
