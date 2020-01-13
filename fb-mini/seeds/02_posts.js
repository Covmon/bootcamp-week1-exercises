
const postsData = require('../data/posts')

exports.seed = knex => knex('posts').del()
  .then(() => knex('posts').insert(postsData))
