const express = require('express');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.send({ message: 'Hello World' })
})

//Set route
const router = require('./src/routes/nktroute')
app.use(router)

app.listen(PORT, () => {
  console.log(`App is listening in port ${PORT}`);
});