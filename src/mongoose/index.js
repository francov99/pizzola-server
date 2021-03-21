const mongoose = require('mongoose')
const config = require('../../config.json')

module.exports = async () => {
  try {
    const connection = await mongoose.connect(config.mongodb_uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    })
    console.log('Mongo DB loaded')
    return connection.connection.db
  } catch (error) {
    console.error(`Error: ${error} `)
    process.exit(1)
  }
}
