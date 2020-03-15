let messages = [];
let id = 0;

const messageModel = {
  text: "",
  date: ""
};

createMessage = (text, date) => {};
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
