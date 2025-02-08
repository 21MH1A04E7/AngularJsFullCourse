/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("borrow").del();
  await knex("borrow").insert([
    {
      book_id: 1,
      user_id: 7,
      borrow_date: "2025-01-01",
      return_date: "2025-02-01",
      status: "borrowed",
    },
    {
      book_id: 2,
      user_id: 8,
      borrow_date: "2025-01-05",
      return_date: "2025-02-05",
      status: "borrowed",
    },
    {
      book_id: 3,
      user_id: 9,
      borrow_date: "2025-01-10",
      return_date: "2025-02-10",
      status: "borrowed",
    },
    {
      book_id: 4,
      user_id: 10,
      borrow_date: "2025-01-12",
      return_date: "2025-02-12",
      status: "borrowed",
    },
    {
      book_id: 5,
      user_id: 11,
      borrow_date: "2025-01-15",
      return_date: "2025-02-15",
      status: "returned",
    },
    {
      book_id: 6,
      user_id: 12,
      borrow_date: "2025-01-18",
      return_date: "2025-02-18",
      status: "borrowed",
    },
    {
      book_id: 7,
      user_id: 7,
      borrow_date: "2025-01-20",
      return_date: "2025-02-20",
      status: "borrowed",
    },
    {
      book_id: 8,
      user_id: 8,
      borrow_date: "2025-01-22",
      return_date: "2025-02-22",
      status: "returned",
    },
    {
      book_id: 9,
      user_id: 9,
      borrow_date: "2025-01-25",
      return_date: "2025-02-25",
      status: "borrowed",
    },
    {
      book_id: 10,
      user_id: 10,
      borrow_date: "2025-01-28",
      return_date: "2025-02-28",
      status: "borrowed",
    },
    {
      book_id: 11,
      user_id: 11,
      borrow_date: "2025-01-30",
      return_date: "2025-02-28",
      status: "returned",
    },
    {
      book_id: 12,
      user_id: 12,
      borrow_date: "2025-01-31",
      return_date: "2025-02-28",
      status: "borrowed",
    },
  ]);
};
