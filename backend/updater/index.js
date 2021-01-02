const { startUpdater } = require('./updaterWorker')
const {
  initializeDatabaseConnection,
} = require('./database/connection')

initializeDatabaseConnection().then(() => {
  startUpdater()
})
