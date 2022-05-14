const path = require('path');

function getMessages(req, res) {
  res.render('messages', {
    title: 'Messages to my Friends',
    friend: 'Elon Musk',
  });

  // path.join(__dirname, '..', 'public', 'images', 'skimountain.jpg')
}

function postMessages(req, res) {
  console.log('Updating Messages...');
}

module.exports = {
  getMessages,
  postMessages,
};
