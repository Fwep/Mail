const MessageStore = require('./message_store');

const Compose = {
  render: function() {
    let div = document.createElement('div');
    div.className = 'new-message';
    div.innerHTML = this.renderForm();

    div.addEventListener('change', (e) => {
      let {target} = e;
      let field = target.name;
      let {value} = target;

      MessageStore.updateDraftField(field, value);
    });

    div.addEventListener('submit', (e) => {
      e.preventDefault();
      MessageStore.sendDraft();
      window.location.hash = "inbox";
    });

    return div;
  },
  renderForm: function() {
    let currDraft = MessageStore.getMessageDraft();
    let form = `
    <p class="new-message-header">New Message</p>
    <form class="compose-form">
      <input placeholder="Recipient" name="to" type="text" value="${currDraft.to}">
      <input placeholder="Subject" name="subject" type="text" value="${currDraft.subject}">
      <textarea name="body" rows="20">${currDraft.body}</textarea>
      <button type="submit" class="btn btn-primary submit-message">Send</button>
    </form>
    `

    return form;
  }
}

module.exports = Compose;