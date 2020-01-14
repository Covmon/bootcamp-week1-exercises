const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Update anyone below the age of 18 to be 18 years old (they shouldn't be keeping pets)
  await User.query().findById('beea3228-ae6e-46ec-8a62-328c555f0722').patch({
    firstName: 'Noahvius',
  })
  // -----
  cleanup()
}

run()
