const Inbox = {
  render: function() {
    let containerUl = document.createElement('ul');
    containerUl.className = 'messages';
    containerUl.innerHTML = 'An Inbox Message';
    return containerUl;
  }
}

module.exports = Inbox;