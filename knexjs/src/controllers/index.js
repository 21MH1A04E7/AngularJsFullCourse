const {
  getUser,
  getUserById,
  getUserBooksWithCategories,
  getUserBooksWithCategoriesAndTitle,
} = require("./user");
const { getBookByCategory } = require("./book");
const { getBookBasedOnCategory } = require("./category");

module.exports = {
  getUser,
  getUserById,
  getBookByCategory,
  getBookBasedOnCategory,
  getUserBooksWithCategories,
  getUserBooksWithCategoriesAndTitle,
};
