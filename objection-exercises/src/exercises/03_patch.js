const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Update anyone below the age of 18 to be 18 years old (they shouldn't be keeping pets)
  await User.query().patch({
    age: 18,
  }).whereBetween('age', [0, 17])
  // -----
  cleanup()
}

run()
