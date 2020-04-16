/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import * as express from 'express';
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
app.get('/', (req, res) => {
  res.send('Welcome to socket-runner!');
});

const port = process.env.SOCKET_SERVER_PORT || 3333;

io.on('connection', function(socket) {
  console.log('a user connected');

  socket.on('editorText', value => {
    io.emit('emittedText', value);
  });

  socket.on('editorSize', value => {
    io.emit('emittedEditorSize', value);
  });
});

const server = http.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
