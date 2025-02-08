/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("book").del();
  await knex("book").insert([
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      category_id: 1, // Assuming 'Fiction' category_id = 1
      quantity_in_stock: 5,
    },
    {
      title: "Sapiens: A Brief History of Humankind",
      author: "Yuval Noah Harari",
      category_id: 2, // Assuming 'Non-fiction' category_id = 2
      quantity_in_stock: 3,
    },
    {
      title: "1984",
      author: "George Orwell",
      category_id: 1, // Assuming 'Fiction' category_id = 1
      quantity_in_stock: 4,
    },
    {
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      category_id: 3, // Assuming 'Science' category_id = 3
      quantity_in_stock: 2,
    },
    {
      title: "The Hobbit",
      author: "J.R.R. Tolkien",
      category_id: 4, // Assuming 'Fantasy' category_id = 4
      quantity_in_stock: 6,
    },
    {
      title: "The Diary of a Young Girl",
      author: "Anne Frank",
      category_id: 5, // Biography
      quantity_in_stock: 7,
    },
    {
      title: "The History of the Ancient World",
      author: "Susan Wise Bauer",
      category_id: 6, // History
      quantity_in_stock: 8,
    },
    {
      title: "The Catcher in the Rye",
      author: "J.D. Salinger",
      category_id: 1, // Fiction
      quantity_in_stock: 5,
    },
    {
      title: "Educated",
      author: "Tara Westover",
      category_id: 5, // Biography
      quantity_in_stock: 4,
    },
    {
      title: "A Short History of Nearly Everything",
      author: "Bill Bryson",
      category_id: 3, // Science
      quantity_in_stock: 3,
    },
    {
      title: "The Lord of the Rings",
      author: "J.R.R. Tolkien",
      category_id: 4, // Fantasy
      quantity_in_stock: 9,
    },
    {
      title: "The Art of War",
      author: "Sun Tzu",
      category_id: 6, // History
      quantity_in_stock: 5,
    },
  ]);
};
