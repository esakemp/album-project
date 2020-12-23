const { startUpdater } = require('./updaterWorker')
const {
  initializeDatabaseConnection,
  sequelize,
} = require('../database/connection')

initializeDatabaseConnection().then(() => {
  startUpdater()
})
