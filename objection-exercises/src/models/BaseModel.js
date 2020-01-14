const { Model } = require('objection')
const knex = require('../lib/index')

Model.knex(knex)

class BaseModel extends Model {
  // static get columnNameMappers() {
  //   return snakeCaseMappers()
  // }
}

module.exports = BaseModel
