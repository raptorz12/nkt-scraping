const nktcontroller = require('../controller/nktcontroller')

const router = require('express').Router()

router.get('/token', nktcontroller.getToken)
router.get('/tokens', nktcontroller.getTokens)

module.exports = router