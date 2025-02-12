const {
  getUser,
  getUserById,
  getUserBooksWithCategories,
  getUserBooksWithCategoriesAndTitle,
} = require("./user");
const { getBookByCategory, getBorrowedBooksByCategory } = require("./book");
const { getBookBasedOnCategory } = require("./category");

module.exports = {
  getUser,
  getUserById,
  getBookByCategory,
  getBookBasedOnCategory,
  getUserBooksWithCategories,
  getUserBooksWithCategoriesAndTitle,
  getBorrowedBooksByCategory,
};
