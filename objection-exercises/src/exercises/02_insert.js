const casual = require('casual')
const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  await User.query().insert({
    firstName: 'Noah',
    lastName: 'Covey',
    id: casual.uuid,
    email: 'ncovey@college.harvard.edu',
    age: 19,
    created_at: casual.moment,
    updated_at: casual.moment,
  })
  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  await Pet.query().insert({
    id: casual.uuid,
    ownerId: '4b8cf1df-839d-4d66-8367-c0259408de76',
    type: casual.random_element(['DOG', 'CAT', 'BIRD', 'FISH', 'ALLIGATOR']),
    name: casual.first_name,
    created_at: casual.moment,
    updated_at: casual.moment,
  })
  // -----
  cleanup()
}

run()
