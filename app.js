const express = require('express')

const app = express()

// Watch for incoming request method GET
// to the route http://localhost:3050/api
app.get('/api', (req, res) => {
  res.send({ hi: 'there' })
})

module.exports = app