let messages = [];
let id = 0;

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
