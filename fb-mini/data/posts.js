/* eslint-disable camelcase */
const casual = require('casual')
const usersData = require('./users')

casual.define('post', user_id => ({
  id: casual.uuid,
  user_id,
  text: casual.sentences(n = 3),
  likes: casual.integer(from = 0, to = 20),
  date_posted: casual.moment,
}))

const postsData = []

for (let i = 0; i < 30; i++) {
  const user_id = casual.random_element(usersData).id
  postsData.push(casual.post(user_id))
}

module.exports = postsData
