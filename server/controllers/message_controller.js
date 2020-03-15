let messages = [];
let id = 0;

const messageModel = {
  id: Number,
  text: "",
  date: ""
};

createMessage = (text, date) => {
  messages.push({ ...messageModel, id, text, date });
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
