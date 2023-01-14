const express = require("express");
const cors = require("cors");
const connect = require("./config/db");

const app = express();
app.use(cors());
app.use(express.json());
connect();

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("Server is running at", port);
});
