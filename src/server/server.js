import path from 'path';
import config from './../../config/config.js';
import express from 'express';
import history from 'connect-history-api-fallback';
import compression from 'compression';
const app = express();

app.get('/api/test', (req, res) => {
  res.send('Node server sends the client its complimeents!')
})

app.use(compression());
app.use(history());
app.use('/', express.static(path.join(__dirname, 'static')))

const server = app.listen(process.env.PORT || config.port, config.host , () => {
  const port = server.address().port
  const host = server.address().address
  console.log('Application started at http://' + host + ':' + port)
})

module.exports = app
