const messages = {
  inbox: [
    {from: 'mary@peacetable.com', subject: 'Re: Onsite Interview', body: `Hey bud
    we ended up \"pursuing other candidates\" because you were too good for us...sorry!`},
    {from: 'mom@mother.mommy', subject: 'Love you Nong', body: 'Hi nong, study hard ok...'}
  ],
  sent: [
    {to: 'recruiter@google.com', subject: 'Come hire me!', body: 'I\'m an awesome developer!'},
    {to: 'elon@spacex.tes', subject: 'About that electric VTOL prototype...', 
    body: `Hey dude, I was able to run sims on SolidWorks and the deflection of the propeller seemed within
    tolerance`}
  ]
}

const MessageStore = {
  getInboxMessages: function() {
    return messages.inbox;
  },
  getSentMessages: function() {
    return messages.sent;
  }
}

module.exports = MessageStore;