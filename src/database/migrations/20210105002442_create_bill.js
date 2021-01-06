exports.up = function (knex) {
   return knex.schema.createTable('bill', function (table) {
      table.increments('id');
      table.string('name').notNullable();
      table.string('date').notNullable();
      table.decimal('value').notNullable();
   });
};

exports.down = function (knex) {
   return knex.schema.dropTable('bill');
};
