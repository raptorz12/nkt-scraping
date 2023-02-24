const { Decimal128 } = require('mongodb')
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const nktSchema = new Schema({
  date: {
    type: Date,
    default: Date.now
  },
  nkt: Number,
  nktprice: Decimal128,
  nka: Number,
  nkaprice: Decimal128,
})

const nkt = mongoose.model('nkt', nktSchema)
module.exports = nkt