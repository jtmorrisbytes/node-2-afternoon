const express = require("express");
bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.json());

app.listen(3001, () => {
  console.log("api server listening on port 3001");
});
