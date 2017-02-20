const express = require('express');

var app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/omnifood'));
app.listen(port, () => {
  console.log(`Started on port ${port}`);
});

module.exports = {app};
