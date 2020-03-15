const express = require("express");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const path = require("path");

const messageController = require("./controllers/message_controller");
const app = express();

app.use(bodyParser.json());
app.use(morgan("tiny"));
app.use(express.static(path.join("..", "public", "build")));
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
app.put("/api/messages/:id", (req, res) => {
  if (!req.params.id) {
    res.status(409).json({
      error: { status: 409, message: "missing id in request", params: "id" }
    });
  }
  res.json(
    messageController.updateMessage(req.params.id, {
      text: req.body.text,
      time: req.body.time
    })
  );
});
app.delete("/api/messages/:id", (req, res) => {
  if (req.params.id != null) {
    res.status(409).json({
      error: { status: 409, message: "missing id in request", params: "id" }
    });
  } else {
    return messageController.deleteMessage(req.params.id);
  }
});
app.listen(3001, () => {
  console.log("api server listening on port 3001");
});
