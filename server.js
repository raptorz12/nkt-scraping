const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  
  mongoose.set("strictQuery", false);

  mongoose.connect('mongodb://localhost:27017/testa')
  const db = mongoose.connection

  db.on('error', (err) => {
    console.log(err)
  })

  db.once('open', () => {
    console.log('Database connection established')
  })




  // await mongoose.connect('mongodb://127.0.0.1:27017/test');

  // await mongoose.connect('mongodb://127.0.0.1:27017/test', () => {
  //   console.log("Connected to MongoDB");
  // });
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled

//   const kittySchema = new mongoose.Schema({
//     name: String
//   });

//   const Kitten = mongoose.model('Kitten', kittySchema);

//   const silence = new Kitten({ name: 'Silence' });
// console.log(silence.name); // 'Silence'
}