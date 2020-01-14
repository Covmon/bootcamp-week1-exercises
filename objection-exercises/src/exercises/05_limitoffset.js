const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get the first 5 users, ordered by lastName
  const first5 = await User.query().orderBy('lastName').limit(5)
  console.log(first5)

  // Get the second 5 users, ordered by lastName
  const next5 = await User.query().orderBy('lastName').limit(5).offset(5)
  console.log(next5)

  // -----
  cleanup()
}

run()
