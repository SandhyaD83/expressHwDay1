//Load Express -Require statement
//-------{mainRequirements}
const express = require('express');
// const res = require('express/lib/response');


//Initialize express
const app = express()
const PORT = 3000

//------------{MiddleWare}





//------{Routing}
// Define a "root" route directly on app
// Tomorrow, we'll use best practice routing
app.get('/', function (req, res) {
    res.send('<h1>Hello World!</h1>');
});
app.get('/home', function (req, res) {
    res.send('<h1>Hello Express</h1>');
});
app.get('/cars', function (req, res) {
    res.send("Here's a list of my cars...");
});
app.post('/cars', function (req, res) {
    res.send('Thanks for the new car!');
});
//--------{Server Info}
//Tell the app to listen on port 3000 for HTTp requests from clients
app.listen(PORT, () => {
    console.log(`Currently Listening on port ${PORT}`)
})
