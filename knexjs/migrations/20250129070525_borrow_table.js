/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema.createTable("borrow", (table) => {
    table.increments("borrow_id").primary();
    table.integer("book_id").unsigned();
    table.integer("user_id").unsigned();
    table.date("borrow_date");
    table.date("return_date");
    table.enu("status", ["borrowed", "returned"]);
  });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("borrow");
};
