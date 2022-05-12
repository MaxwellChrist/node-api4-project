const express = require('express');
const Users = require('./users-model')
const server = express();
server.use(express.json());

server.get('/', (req, res) => {
    res.send("This is the start of something big!")
})

server.get('/api/users', (req, res) => {
    Users.get()
    .then(result => {
        res.json(result);
    })
})

server.post('/api/register', (req, res) => {
    Users.postRegister()
    .then(result => {
        res.json
    })
})

module.exports = server;