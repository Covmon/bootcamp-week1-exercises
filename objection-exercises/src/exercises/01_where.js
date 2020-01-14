/* eslint-disable no-restricted-syntax */
const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const usersNamedSkye = await User.query().where('firstName', 'Skye')
  console.log(usersNamedSkye)

  // Do the same with object notation
  const allUsers = await User.query()
  for (const user of allUsers) {
    if (user.firstName === 'Skye') {
      console.log(user)
    }
  }

  // Get all DOGS and BIRDS
  const dogsAndBirds = await Pet.query().whereIn('type', ['DOG', 'BIRD'])
  console.log(dogsAndBirds)

  // -----
  cleanup()
}

run()
