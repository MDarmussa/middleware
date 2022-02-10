const http = require('http');
const express = require('express');
const morgan = require('morgan')
const logger = morgan('tiny') //built in, referes to the status of morgan and how long it takes to run
const helmet = require("helmet"); //sets your HTTP Response headers appropriately, protecting your app from well-known vulnerabilities.
const HOST = '127.0.0.1';
const PORT = 3000;


const app = express();
const server = http.createServer(app);


app.use(helmet()); //for securing the HTTP
app.use(logger); // for the morgan time
app.use(express.static('public')); //for attaching images and styles
app.use((req, res, next) => {
     console.log(`Request at ${new Date()}`);
     next();
});

// app.use((req, res, next) => {
//     console.log(`${req.method} ${req.path}`);
//     next();
// });

app.get('/', (req, res) => {
    res.send('Hello Middleware');
});

server.listen(PORT, HOST, () => {
    console.log(`Listening on http://${HOST}:${PORT}`);
});