
const friendshipsData = require('../data/friendships')

exports.seed = knex => knex('friendships').del()
  .then(() => knex('friendships').insert(friendshipsData))
