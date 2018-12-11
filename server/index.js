const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3004;
const public_companyLogIn_src = path.join(__dirname, '../companyLogIn/public');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));

app.use('/users/sign_in', express.static(public_companyLogIn_src));

app.listen(port, (err) => {
  if (err){
    return console.log(err);
  }
  console.log(`client site listening on: ${port}`);
});
