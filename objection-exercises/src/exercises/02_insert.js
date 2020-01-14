const casual = require('casual')
const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!


  // Insert yourself in the users table
  const me = await User.query().insert({
    firstName: 'Noah',
    lastName: 'Covey III',
    email: 'ncoveyIII@college.harvard.edu',
    age: 19,
  }).returning('*')

  console.log(me)

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  const myPet = await Pet.query().insert({
    ownerId: me.id,
    type: casual.random_element(['DOG', 'CAT', 'BIRD', 'FISH', 'ALLIGATOR']),
    name: casual.first_name,
  }).returning('*')

  console.log(myPet)
  // -----
  cleanup()
}

run()
