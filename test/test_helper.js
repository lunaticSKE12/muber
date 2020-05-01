const mongoose = require('mongoose')

require('dotenv').config()
before(done => {

  const uri = process.env.ATLAS_URI;
  // test server
  mongoose.connect(uri)
  mongoose.connection
    .once('open', () => done())
    .on('error', err => {
      console.warn('Warning', err)
    })
})

beforeEach(done => {
  const { drivers } = mongoose.connection.collections
  drivers.drop()
    .then(() => done())
    .catch(() => done())
})