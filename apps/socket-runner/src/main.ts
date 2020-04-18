/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 **/

import * as express from 'express';
const cors = require('cors');
const app = express();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const port = process.env.SOCKET_SERVER_PORT || 3333;

//save editor test against id
const editorText = [];

//fix up cors problem
app.use(cors());

//home route
app.get('/', (req, res) => {
  res.send('Welcome to socket-runner!');
});

//group route
app.get('/group/:id', (req, res) => {
  const { id } = req.params;
  if (!editorText[id]) editorText[id] = { data: '' };
  //return { data: editorText[id] };
  console.log({ data: editorText[id] });
  res.send({ data: editorText[id] });
});

// handle socket connections and emits
io.on('connection', function(socket) {
  console.log('a user connected');

  socket.on('editorText', ({ content, id }) => {
    //id for group data store
    editorText[id] = content;
    io.emit('emittedText', { content });
  });

  socket.on('editorSize', value => {
    io.emit('emittedEditorSize', value);
  });
});

// launch server
const server = http.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});
server.on('error', console.error);
