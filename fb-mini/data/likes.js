/* eslint-disable camelcase */
const casual = require('casual')
const usersData = require('./users')
const postsData = require('./posts')

casual.define('like', (user_id, post_id) => ({
  id: casual.uuid,
  user_id,
  post_id,
  date_liked: casual.moment,
}))

const likesData = []

for (let i = 0; i < 30; i++) {
  const likeCount = postsData[i].likes
  const post_id = postsData[i].id

  for (let j = 0; j < likeCount; j++) {
    const user_id = casual.random_element(usersData).id
    likesData.push(casual.like(user_id, post_id))
  }
}

module.exports = likesData
