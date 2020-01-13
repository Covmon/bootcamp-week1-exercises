
exports.up = async knex => knex.schema.createTable('posts', table => {
  table.uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table.uuid('user_id')
    .notNullable()
    .references('users.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')

  table.text('text')

  table.integer('likes')

  table.date('date_posted')
})

exports.down = async knex => knex.schema.dropTableIfExists('posts')
