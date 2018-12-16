const request = require('request');
const tokenGeneration = require('./tokenGeneration');

const callbackRequest = (callInfo, res) => {
  const url = 'https://api.talkdeskapp.com/calls/callback';
  const talkdesk_phone_number = '+14155786136';
  const contact_phone_number = '+1'.concat(callInfo.phone);
  const { name, subject, description } = callInfo;

  const callbackApiCall = (Access_Token) => {
    const options = {
      json: true,
      auth: { 'bearer': Access_Token },
      body: { talkdesk_phone_number, contact_phone_number },
    };
    request.post(url, options, (err, httpResponse, body) => {
      if (err) {
        return res.sendStatus(400).end();
      }
      res.sendStatus(200).end();
    });
  };

  tokenGeneration(callbackApiCall);
};

module.exports = callbackRequest;
