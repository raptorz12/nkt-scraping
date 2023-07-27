const mongoose = require('mongoose')
const Schema = mongoose.Schema

const tokenSchema = new Schema({
  date: {
    type: Date,
    require: true,
    default: Date.now,
  },
  nkt: {
    type: Number,
    require: true,
  },
  nktprice: {
    type: String,
    require: true,
  },
  nka: {
    type: Number,
    require: true,
  },
  nkaprice: {
    type: String,
    require: true,
  },
})

module.exports = mongoose.model('token', tokenSchema)