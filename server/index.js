const config =  require('./config.js');
const express = require("express");

const app = express();

console.log(`NODE_ENV=${config.NODE_ENV}`);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(() => {
  console.log(`APP LISTENING ON PORT ${process.env.PORT || 3000}`);
});