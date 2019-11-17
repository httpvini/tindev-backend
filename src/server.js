const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const jsyml = require('js-yaml')
const routes = require('./routes');
const server = express();

const dbConnection = jsyml.load(applicatio.yml);

mongoose.connect(dbConnection, {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3000, console.log("running on port 3000"));