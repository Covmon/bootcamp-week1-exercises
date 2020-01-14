const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Use basic queries to test any virtual attributes you wrote on your models
  const users = await User.query().limit(1)
  const user = users[0]
  console.log(user.fullName())
  console.log(user.birthYear())

  const pets = await Pet.query().limit(1)
  const pet = pets[0]
  console.log(pet.fullName())
  // -----
  cleanup()
}

run()
