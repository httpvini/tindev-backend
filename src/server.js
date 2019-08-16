const express = require('express');
const mongoose = require('mongoose')
const routes = require('./routes');
const server = express();

const dbConnection = 'mongodb+srv://omnistackdev:omnistackdev@cluster0-dpgyi.mongodb.net/omnistack8?retryWrites=true&w=majority'
mongoose.connect(dbConnection, {
    useNewUrlParser: true
});

server.use(express.json());
server.use(routes);

server.listen(3000, console.log("running on port 3000"));