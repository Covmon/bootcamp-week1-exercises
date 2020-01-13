
exports.up = async knex => knex.schema.createTable('likes', table => {
  table.uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table.uuid('user_id')
    .notNullable()
    .references('users.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')

  table.uuid('post_id')
    .notNullable()
    .references('posts.id')
    .onDelete('CASCADE')
    .onUpdate('CASCADE')

  table.date('date_liked')
})

exports.down = async knex => knex.schema.dropTableIfExists('likes')
