const express = require('express')
const path = require('path')

const router = express.Router()

router.get('/api/email', (req, res) => {
    
    res.send({ email: 'hopkins@gmail.com'})
})

// router.get('/', (req, res) => {
//     res.sendFile('index.html')
// })

module.exports = router