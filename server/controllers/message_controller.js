let messages = [];
let id = 0;

const messageModel = {
  id: Number,
  text: "",
  time: ""
};

createMessage = (text, time) => {
  messages.push({ ...messageModel, id, text, time });
  id++;
  return messages;
};
getMessages = () => {
  return messages;
};
updateMessage = (messageId, params = { text: null, time: null }) => {
  return messages.map(message => {
    if (message.id == messageId) {
      if (params.text) {
        message.text = params.text;
      }
      if (params.time) {
        message.time = params.time;
      }
    }
    return message;
  });
};
deleteMessage = messageId => {
  if (messageId) {
    return messages.filter(message => {
      return message.id != messageID;
    });
  }
  return messages;
};

module.exports = {
  createMessage,
  getMessages,
  updateMessage,
  deleteMessage
};
