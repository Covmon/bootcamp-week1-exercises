const { Model } = require('objection')
const knex = require('../lib/index')

Model.knex(knex)

class BaseModel extends Model {
  // static get columnNameMappers() {
  //   return snakeCaseMappers()
  // }
  async $beforeUpdate(opt, queryContext) {
    const d = new Date()
    console.log('BEFORE UPDATE')
    await super.$beforeUpdate(opt, queryContext)
    this.updated_at = d
  }

  async $beforeInsert(opt, queryContext) {
    const d = new Date()
    console.log('BEFORE INSERT')
    await super.$beforeInsert(opt, queryContext)
    this.created_at = d
    this.updated_at = d
  }
}

module.exports = BaseModel
