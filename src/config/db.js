const mongoose = require('mongoose')

const connectDB = async () => {
  await mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }).then(() => {
    console.log('============== Mongodb Database Connected Successfully ==============')
  }).catch((error) => {
    console.log('============== Database Not Connected ==============')
  })
}

module.exports = connectDB