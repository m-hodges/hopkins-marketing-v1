const express = require('express')
const path = require('path')

const server = express()
const router = require('./routes')

server.use(express.static(__dirname))
server.use(express.static(path.join(__dirname, 'dist')))
server.use('/', router)

module.exports = server