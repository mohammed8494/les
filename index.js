const express = require("express");
const app = express();
const cors = require("cors");
const sayHello = require("./middleware/hello.js");
const logger = require("./middleware/logger.js");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
// app.use(sayHello);
app.use(logger);


const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("<h1> Welcome to the server</h1>");
});

app.listen(3000, () => {
  console.log(`the server running in port ${port}`);
});
