//info: Let's say that in future we want to incorporate real time chat using socket.io and for that one we need http module
const http = require('http');
//info: we will be using express frame work for this project
const express = require('express');


//!server
const app = express();

//info: we have more flexibility to extend the functionality about our server.
const server = http.createServer(app);
//?start the server

const PORT = process.env.PORT || 9080
server.listen(PORT, console.log(`Serveris running on port ${PORT} `))