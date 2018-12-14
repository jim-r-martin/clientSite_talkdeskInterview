const request = require('request');
const clientAuthCode = require('./keys');

const tokenGeneration = (callback) => {
  const uri = 'https://demoeng.talkdeskid.com/oauth/token';
  request.post(uri, { 
    headers: {
      'Authorization': `Basic ${clientAuthCode}`,
    },
    contentType: 'application/x-www-form-urlencoded',
    form: {
      scope: 'callback:write',
      grant_type: 'client_credentials',
    },
  }, (err, httpResponse, body) => {
    if (err) {
      return console.log(err);
    }
    const { access_token } = JSON.parse(body);
    callback(access_token);
  });
};

module.exports = tokenGeneration;