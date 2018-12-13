const request = require('request');
const tokenGeneration = require('./tokenGeneration');

const callbackRequest = (callInfo, res) => {
  const { contact_phone_number } = callInfo;
  const url = 'https://api.talkdeskapp.com/calls/callback';
  const talkdesk_phone_number = '+14155786136';

  const callbackApiCall = (Access_Token) => {
    const options = {
      json: true,
      auth: { 'bearer': Access_Token },
      body: { talkdesk_phone_number, contact_phone_number },
    };
    request.post(url, options, (err, httpResponse, body) => {
      if (err) {
        return console.log(err);
      }
    });
  };
  tokenGeneration(callbackApiCall);
};

const info = {
  contact_phone_number: '+15622301815',
};

callbackRequest(info, null);

module.exports = callbackRequest;