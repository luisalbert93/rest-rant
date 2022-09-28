const router = require('express').Router()

// local host:3000/Places/

router.get('/', (req, res) => {
    res.send('GET /places')
})

module.exports = router

