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
updateMessage = (messageId, params = { text: null, time: null }) => {};
deleteMessage = messageId => {};

module.exports = {
  createMessage,
  getMessages,
  updateMessage,
  deleteMessage
};
