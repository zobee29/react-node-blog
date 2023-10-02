const config =  require('../config.js');
const express = require("express");

const app = express();

console.log(`NODE_ENV=${config.NODE_ENV}`);

app.get("/api", (req, res) => {
  res.json({ message: "Hello from server!" });
});

app.listen(config.PORT, config.HOST, () => {
  console.log(`APP LISTENING ON http://${config.HOST}:${config.PORT}`);
})