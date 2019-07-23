const MessageStore = require('./message_store');

const Sent = {
  render: function() {
    let containerUl = document.createElement('ul');
    containerUl.className = 'messages';
    let inboxMsgs = MessageStore.getSentMessages();
    inboxMsgs.forEach(msg => {
      let messageNode = this.renderMessage(msg);
      containerUl.appendChild(messageNode);
    });

    return containerUl;
  },
  renderMessage: (message) => {
    let li = document.createElement('li');
    li.className = 'message';
    li.innerHTML = `
    <span class="to">${message.to}</span>
    <span class="subject">${message.subject}</span>
    <span class="body">${message.body}</span>
    `
    return li;
  }
}

module.exports = Sent;