const path = require('path')
const config = require('./../../config/config.js');
const express = require('express')
const app = express()

app.get('/test', (req, res) => {
  res.send('Node server sends the client its complimeents!')
})


app.use('/', express.static(path.join(__dirname, 'static')))

const server = app.listen(config.port, '127.0.0.1', () => {
  const port = server.address().port
  const host = server.address().address
  console.log('Application started at http://' + host + ':' + port)
})

module.exports = app
