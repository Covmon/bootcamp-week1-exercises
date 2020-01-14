const casual = require('casual')
const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */

  await User.transaction(async trx => {
    try {
      const bobId = casual.uuid
      const bob = await User.query(trx).insert({
        firstName: 'Bob',
        lastName: 'Trumad',
        id: bobId,
        email: 'bob_Trumad99@gmail.com',
        age: 25,
        created_at: casual.moment,
        updated_at: casual.moment,
      }).returning('*')

      await bob.$relatedQuery('pets', trx).insert({
        id: casual.uuid,
        ownerId: bobId,
        type: casual.random_element(['DOG', 'CAT', 'BIRD', 'FISH', 'ALLIGATOR']),
        name: casual.first_name,
        created_at: casual.moment,
        updated_at: casual.moment,
      }).returning('*')

      // throw new Error('Testing my bob error')

      const numPets = await Pet.query().resultSize()
      if (numPets) {
        await Pet.query().delete().where('type', 'BIRD')
      }
    } catch (err) {
      console.log(`Promise failed with error: ${err}`)
    }
  })


  // -----
  cleanup()
}

run()
