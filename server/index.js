const express = require("express");
bodyParser = require("body-parser");
const messageController = require("./controllers/message_controller");
const app = express();

app.use(bodyParser.json());

app.get("/api/messages", (req, res) => {
  res.json(messageController.getMessages());
});
app.post("/api/messages", (req, res) => {});

app.listen(3001, () => {
  console.log("api server listening on port 3001");
});
