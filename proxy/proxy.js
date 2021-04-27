// include dependencies
const express = require("express");
const app = express();
const cors = require("cors");
const request = require("request");

app.use(cors());

app.get("/api/drawings/euroJackpot", function (req, res) {
  request({
    uri: "https://media.lottoland.com/api/drawings/euroJackpot",
  }).pipe(res);
});

app.listen(3000);
