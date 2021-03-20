const mongoose = require('mongoose')

module.exports = async () => {
  try {
    const uri = process.env.MONGODB_URI
    const connection = await mongoose.connect(uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    console.log('Mongo DB loaded')
    return connection.connection.db
  } catch (error) {
    console.error(`Error: ${error} `)
    process.exit(1) //passing 1 - will exit the proccess with error
  }
}
