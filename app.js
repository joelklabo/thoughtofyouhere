var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Thought of you here')
})

app.listen(8000)
console.log('Listening on port 3000')
