# Pieces

Pieces is a Realtime data (aproach) app build with React and Socket.io

## After Cloning

Open a terminal type the followin commands.

#### To install

```
> npm install
```
#### To Run

In order to use a dev server to mock the realtime data we have to run:

```
> npm run dev
```
And in other terminal window run this other scipt to run the Aplication

```
> npm start
```

Both scripts (dev and start) will catch the terminal with a continius proccess, watching any change in the code, so if you need to run other comands like git actions or any other I suggest you to open another terminal.

Once we get this done we can see our app in a browser in ```localhost:8080```

#### Misc
This POC is set to change the values every 2 seconds, if you want to change this interval of time you must override this line ```socket.emit('subscribeToTimer', 2000);``` in the file api.js , so just change 2000 by anu other value (in miliseconds), 10 seconds must be 10000, for example.

#### To Do

- Replace the socket connection method inside the contructor of the component for an action using Redux. 
- Create proper testing enviroment before integrate Redux.
- Refactor the main app component into an HOC.