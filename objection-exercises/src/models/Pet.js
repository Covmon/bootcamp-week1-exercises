// Write your Pet model here!
const BaseModel = require('./BaseModel')

class Pet extends BaseModel {
  static get tableName() {
    return 'pets'
  }

  static get virtualAttributes() {
    return ['fullName']
  }

  fullName() {
    return `${this.name} the ${this.type.toLowerCase()}`
  }

  static get relationMappings() {
    const User = require('./User')

    return {
      owner: {
        relation: this.HasOneRelation,
        modelClass: User,
        join: {
          from: 'pets.ownerId',
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = Pet
