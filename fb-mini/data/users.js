const casual = require('casual')

casual.define('user', () => ({
  id: casual.uuid,
  email: casual.email,
  password: casual.password,
  first_name: casual.first_name,
  last_name: casual.last_name,
  dob: casual.moment,
  bio: casual.sentences(n = 2),
  latitude: casual.latitude,
  longitude: casual.longitude,
  created_at: casual.moment,
  updated_at: casual.moment,
}))

const userData = []

for (let i = 0; i < 20; ++i) {
  userData.push(casual.user)
}

module.exports = userData
