const casual = require('casual')
const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!
  const myId = '254128ed-c51b-4689-bd1b-4ff8a02653b4'
  // Get an instance of a user using findById(<YOUR_ID>)
  const noah = await User.query().findById(myId)

  // Use that instance to create a new pet related that user
  await noah.$relatedQuery('pets').insert({
    id: casual.uuid,
    ownerId: myId,
    type: casual.random_element(['DOG', 'CAT', 'BIRD', 'FISH', 'ALLIGATOR']),
    name: casual.first_name,
    created_at: casual.moment,
    updated_at: casual.moment,
  })

  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph
  const res = await User.fetchGraph(noah, '[pets, children]')
  console.log(res)
  // -----
  cleanup()
}

run()
