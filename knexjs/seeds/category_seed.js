/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("category").del();
  await knex("category").insert([
    { category_name: "Fiction" },
    { category_name: "Non-fiction" },
    { category_name: "Science" },
    { category_name: "Fantasy" },
    { category_name: "Biography" },
    { category_name: "History" },
  ]);
};
