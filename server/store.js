const storage = require('azure-storage')
const retryOperations = new storage.ExponentialRetryPolicyFilter()
const service = storage.createTableService("pac1firststorage","KXJbPlHKw/K3aeDfVX+zSflJYvXvxPAeQalafKlA+PSHmGKcbmlQOikRSgS+JQxx5zT7L0glbYOToyBtisxk0A==").withFilter(retryOperations)
const table = 'tasks'


const init = async () => (
  new Promise((resolve, reject) => {
    service.createTableIfNotExists(table, (error, result, response) => {
      !error ? resolve() : reject()
    })
  })
)

module.exports = {
  init
}