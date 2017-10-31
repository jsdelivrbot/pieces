const io = require('socket.io')();
const realTimer = () =>({
  date: new Date(),
  parts: [
    {
      name: 'Sporting',
      id: 'AFC11111983',
      features: [
        { name: 'Villa', type: 'Seam', id: '1AZ', controls:[
          {
            name: 'X',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Y',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Z',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Diameter',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          }
        ], },
        { name: 'Marcelino', type: 'Seam', id: '1AZ', controls:[
          {
            name: 'X',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Y',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Z',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Diameter',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          }
        ], },
        { name: 'Quini', type: 'Seam', id: '1AZ', controls:[
          {
            name: 'X',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Y',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Z',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Diameter',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          }
        ], },
        { name: 'Ablanedo', type: 'Seam', id: '1AZ', controls:[
          {
            name: 'X',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Y',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Z',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Diameter',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          }
        ], },
        { name: 'Abelardo', type: 'Seam', id: '1AZ', controls:[
          {
            name: 'X',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Y',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Z',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Diameter',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          }
        ], },
        { name: 'Lucho', type: 'Seam', id: '1AZ', controls:[
          {
            name: 'X',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Y',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Z',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Diameter',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          }
        ], },
      ] 
    }
  ]
})

io.on('connection', (client) => {
  client.on('subscribeToTimer', (interval) => {
    console.log('client is subscribing to timer with interval ', interval);
    setInterval(() => {
      client.emit('timer', realTimer());

    }, interval);
  });
});

const port = process.env.PORT || 3090;
io.listen(port);
console.log('Server listening on port ', port);