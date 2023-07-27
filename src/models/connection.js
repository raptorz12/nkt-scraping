const mongoose = require("mongoose")

const connect = () => {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.CONNECTION_STRING)
  const db = mongoose.connection

  db.on('error', (err) => {
    console.log(err)
  })

  db.once('open', () => {
    console.log('MongoDB connected')
  })
}

const closeConnection = () => {
  mongoose.connection.close()
  console.log('MongoDB disconnected')
}

module.exports = { connect, closeConnection }