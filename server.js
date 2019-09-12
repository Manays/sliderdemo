const express = require('express');
const port=process.env.PORT || 3000;
var app = express();
app.use(express.static(__dirname + '/webdir'));

app.listen(port, () => {
  console.log('Started on port 3000');
});
