const config =  require('./config.js');
const express = require("express");
const cors = require('cors');

const app = express();

app.use(cors());

console.log(`NODE_ENV=${config.NODE_ENV}`);

app.get("/api", (req, res) => res.json({ message: "Hello from server!" }));

app.listen(config.PORT, config.HOST, () => {
  console.log(`APP LISTENING ON http://${config.HOST}:${config.PORT}`);
})