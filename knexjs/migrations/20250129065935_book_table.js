/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("book", (table) => {
    table.increments("book_id").primary(),
      table.string("title").notNullable(),
      table.string("author").nullable(),
      table.integer("category_id").unsigned(),
      table.integer("quantity_in_stock").defaultTo(0),
      table.timestamps(true, true);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("book");
};
