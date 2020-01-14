const BaseModel = require('./BaseModel')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get virtualAttributes() {
    return ['fullName', 'birthYear']
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  birthYear() {
    return (2020 - this.age)
  }

  static get relationMappings() {
    const Pet = require('./Pet')

    return {
      pets: {
        relation: this.HasManyRelation,
        modelClass: Pet,
        join: {
          from: 'users.id',
          to: 'pets.ownerId',
        },
      },
      children: {
        relation: this.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.parentId',
            to: 'relations.childId',
          },
          to: 'users.id',
        },
      },
      parents: {
        relation: this.ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.childId',
            to: 'relations.parentId',
          },
          to: 'users.id',
        },
      },
    }
  }
}

module.exports = User
