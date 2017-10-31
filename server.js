const io = require('socket.io')();


io.on('connection', (client) => {
    // magic
  });

const port = process.env.PORT || 3090;
io.listen(port);
console.log('Server listening on port ', port);