let messages = [];
let id = 0;

const messageModel = {
  id: 0,
  text: "",
  date: ""
};

createMessage = (text, date) => {
  messages.push({ ...messageModel, text, date });
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
