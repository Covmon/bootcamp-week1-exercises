/* eslint-disable camelcase */
const casual = require('casual')
const usersData = require('./users')

casual.define('friendship', (requester_id, requestee_id) => ({
  id: casual.uuid,
  requester_id,
  requestee_id,
  status: 'PENDING',
  date_requested: casual.moment,
}))


const friendshipsData = []

for (let i = 0; i < 20; ++i) {
  let requester_id = casual.random_element(usersData).id
  let requestee_id = casual.random_element(usersData).id

  while (requester_id === requestee_id) {
    requester_id = casual.random_element(usersData).id
    requestee_id = casual.random_element(usersData).id
  }

  friendshipsData.push(casual.friendship(requester_id, requestee_id))
}

module.exports = friendshipsData
