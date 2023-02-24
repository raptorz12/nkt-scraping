const nkt = require('../models/nkt')

const index = (req, res) => {
  nkt.find()
  .then(response => {
    res.json({
      response
    })
  })
  .catch(error => {
    res.json({
      message: 'An error occured'
    })
  })
}