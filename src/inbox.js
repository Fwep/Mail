const MessageStore = require('./message_store');

const Inbox = {
  render: function() {
    let containerUl = document.createElement('ul');
    containerUl.className = 'messages';
    let inboxMsgs = MessageStore.getInboxMessages();
    inboxMsgs.forEach(msg => {
      console.log(this);
      let messageNode = this.renderMessage(msg);
      containerUl.appendChild(messageNode);
    });
    
    return containerUl;
  },
  renderMessage: (message) => {
    let li = document.createElement('li');
    li.className = 'message';
    li.innerHTML = `
    <span class="from">${message.from}</span>
    <span class="subject">${message.subject}</span>
    <span class="body">${message.body}</span>
    `
    return li;
  }
}

module.exports = Inbox;