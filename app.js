const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes/routes')
const app = express()
require('dotenv').config()

mongoose.Promise = global.Promise
if (process.env.NODE_ENV !== 'test') {
  const uri = process.env.ATLAS_URI;
  mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
}

app.use(bodyParser.json())
routes(app)

app.use((err, req, res, next) => {
  res.status(422).send({ error: err.message })
})

module.exports = app 