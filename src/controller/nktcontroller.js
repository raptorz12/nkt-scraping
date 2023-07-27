const Token = require('../models/token')
const scraper = require('../../scraper') 
const { connect } = require('../models/connection')

connect()

const getToken = async (req, res) => {
  if (req.query.date != null) {
    //Get scraped token data by date from query parameter
    const date = req.query.date
    const newDate = new Date(date)
    newDate.setHours(13)
    
    const tokenData = await Token.findOne({date: newDate.toISOString()})
    if (tokenData!=null) {
      res.status(200).send({
        message: 'Token data found', 
        tokenData
      })
    } else {
      res.status(404).send({
        message: 'Token data not found',
      })
    }
  } else {
    //Get the latest scraped token data
    const tokenData = (await Token.findOne().sort({date: -1}))

    if(tokenData!=null) {
      const tokenDataDate = tokenData.date.getUTCDate()
      const date = new Date()
      const currentDate = date.getUTCDate()
      const currentHours = date.getUTCHours()

      if ((tokenDataDate === currentDate) || (tokenDataDate < currentDate && currentHours < 6)) {
        res.status(200).send({
          message: 'Token data found', 
          tokenData
        })
      } else {
          //Scraping token data and save into database
          scraper().then((data) => {
            const newToken = new Token(data)
            newToken.save().
              then((data) => {
                res.status(200).send({
                  message: 'Token data scraped', 
                  data
                })
            }).catch((err) => {
              res.status(500).send({
                message: 'Token data could not be scraped', 
              })
            })
          })
      }
    } else {
        scraper().then((data) => {
          const newToken = new Token(data)
          newToken.save().
            then((data) => {
              res.status(200).send({
                message: 'Token data scraped', 
                data
              })
          }).catch((err) => {
            res.status(500).send({
              message: 'Token data could not be scraped', 
            })
          })
        })
    }
  }
}

const getTokens = async (req, res) => {
  const data = (await Token.find().sort({date: -1}))
  
  if (data!=null) {
    res.status(200).send({
      message: 'Token datas found', 
      data
    })
  }
}

module.exports = {
  getToken,
  getTokens,
}