const express = require("express");
bodyParser = require("body-parser");
const messageController = require("./controllers/message_controller");
const app = express();

app.use(bodyParser.json());

app.get("/api/messages", (req, res) => {
  res.json(messageController.getMessages());
});
app.post("/api/messages", (req, res) => {
  if (!req.body.text && !req.body.time) {
    res.json(messageController.getMessages());
  } else {
    res.json(messageController.createMessage(req.body.text, req.body.time));
  }
  //   res.status(501).json({ error: "not implemented" });
});
app.put("/api/messages", (req, res) => {
  if (!req.body.id) {
    res.status(409).json({ error: 409 });
  }
  res.json(messageController.updateMessage());
});
app.listen(3001, () => {
  console.log("api server listening on port 3001");
});
