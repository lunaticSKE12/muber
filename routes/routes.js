const DriverController = require('../controller/drivers_controller')
module.exports = (app) => {
  // Watch for incoming request method GET
  // to the route http://localhost:3050/api
  app.get('/api', DriverController.greeting)

  app.post('/api/drivers', DriverController.create)

  app.put('/api/drivers/:id', DriverController.create)
}