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
          },
          {
            name: 'Xa',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Ya',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Za',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Diameter a',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Xb',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Yb',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Zb',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Diameter b',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Xc',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Yc',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Zc',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Diameter c',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'X d',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Y d',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Z d',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Diameter d',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'X e',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Y f',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Z f',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
          {
            name: 'Diameter f',
            dev: Math.floor(Math.random()*10),
            devot:  Math.floor(Math.random()*100)
          },
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