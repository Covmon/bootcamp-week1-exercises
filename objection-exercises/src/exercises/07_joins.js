const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const usersPets = await User.query().withGraphFetched('pets')
  console.log(usersPets)

  // Get all users, their pets, AND their children
  const usersPetsChildren = await User.query().withGraphFetched('[pets, children]')
  console.log(usersPetsChildren)

  // Get all users, their parents, and their grandparents
  const usersParentsGrandparents = await User.query().withGraphFetched('parents.parents')
  console.log(usersParentsGrandparents[0].parents[0])

  // Get all users, their pets, their chilren, and their childrens' pets
  const usersPetsChildrensPets = await User.query().withGraphFetched('[pets, children.pets]')
  console.log(usersPetsChildrensPets[0].children[0])
  console.log(usersPetsChildrensPets[0].pets)

  // -----
  cleanup()
}

run()
