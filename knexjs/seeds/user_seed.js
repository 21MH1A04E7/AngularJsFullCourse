/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    { name: "John Doe", email: "johndoe@example.com" },
    { name: "Jane Smith", email: "janesmith@example.com" },
    { name: "Alice Johnson", email: "alicejohnson@example.com" },
    { name: "Bob Brown", email: "bobbrown@example.com" },
  ]);
};
