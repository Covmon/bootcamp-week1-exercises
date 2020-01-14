const casual = require('casual')
const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!
  const userId = casual.uuid
  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
  const peterAndPets = await User.query().insertGraph({
    id: userId,
    firstName: 'Peter',
    lastName: 'Bynum',
    age: 20,
    email: 'pbynum@college.harvard.edu',
    created_at: casual.moment,
    updated_at: casual.moment,
    pets: [
      {
        id: casual.uuid,
        ownerId: userId,
        type: 'DOG',
        name: 'Rocco',
        created_at: casual.moment,
        updated_at: casual.moment,
      },
      {
        id: casual.uuid,
        ownerId: userId,
        type: 'DOG',
        name: 'Rosey',
        created_at: casual.moment,
        updated_at: casual.moment,
      },
    ],
  })

  console.log(peterAndPets)

  // -----
  cleanup()
}

run()
