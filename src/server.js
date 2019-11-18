const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const yaml = require('js-yaml');
const fs = require('fs');
const routes = require('./routes');
const server = express();

const dbConnection = yaml.safeLoad(fs.readFileSync('application.yml', 'utf8'));

mongoose.connect(dbConnection.dbUrl, {
    useNewUrlParser: true
});

server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3000, console.log("running on port 3000"));