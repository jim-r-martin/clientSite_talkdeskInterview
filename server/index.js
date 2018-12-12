const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3004;

const public_companyLogIn_src = path.join(__dirname, '../companyLogIn/public');
const public_userLogIn_src = path.join(__dirname, '../userLogIn/public');
const public_helpRequest_src = path.join(__dirname, '../helpRequest/public');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.use('/users/sign_in', express.static(public_companyLogIn_src));
app.use('/login',express.static(public_userLogIn_src));
app.use('/help', express.static(public_helpRequest_src));

app.listen(port, (err) => {
  if (err){
    return console.log(err);
  }
  console.log(`client site listening on: ${port}`);
});
