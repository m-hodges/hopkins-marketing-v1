const express = require('express')
const path = require('path')

const router = express.Router()

router.post('/email', (req, res) => {
    res.redirect('/')
})

router.get('/', (req, res) => {
    res.sendFile('index.html')
})

module.exports = router