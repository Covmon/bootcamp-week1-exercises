exports.up = async knex => knex.schema.createTable('users', table => {
  table
    .uuid('id')
    .notNullable()
    .primary()
    .defaultTo(knex.raw('uuid_generate_v4()'))

  table.string('email').unique().notNullable()

  table.string('password').notNullable()

  table.string('first_name').notNullable()

  table.string('last_name').notNullable()

  table.date('dob')

  table.text('bio')

  table.float('latitude')

  table.float('longitude')

  table.timestamps(true)
})

exports.down = async knex => knex.schema.dropTableIfExists('users')
