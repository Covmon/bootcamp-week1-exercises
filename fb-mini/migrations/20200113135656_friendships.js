
exports.up = async knex => knex.schema.createTable('friendships', table => {
  table.uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table.uuid('requester_id')
    .notNullable()
    .references('users.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')

  table.uuid('requestee_id')
    .notNullable()
    .references('users.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')

  table.enu('status', ['PENDING', 'ACCEPTED', 'DECLINED'])
    .notNullable()

  table.date('date_requested')
    .notNullable()
})

exports.down = async knex => knex.schema.dropTableIfExists('friendships')
