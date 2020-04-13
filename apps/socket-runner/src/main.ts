/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import * as express from 'express';

const app = express();

const http = require('http').createServer(app);
// eslint-disable-next-line @typescript-eslint/no-var-requires
const io = require('socket.io')(http);
app.get('/', (req, res) => {
  res.send({ message: 'Welcome to socket-runner!' });
});

const port = process.env.port || 3333;

io.on('connection', function(socket) {
  console.log('a user connected', socket);
});

const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
