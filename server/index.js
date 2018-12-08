const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3004;
const public_src = path.join(__dirname, '../public');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false,
}));
app.use(express.static(public_src));

app.listen(port, (err) => {
  if (err){
    return console.log(err);
  }
  console.log(`client site listening on: ${port}`);
});
