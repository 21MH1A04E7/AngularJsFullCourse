const {
  getUser,
  getUserById,
  getBookByCategory,
  getBookBasedOnCategory,
  getUserBooksWithCategories,
  getUserBooksWithCategoriesAndTitle,
} = require("../controllers/index");
const express = require("express");
const route = express.Router();

route.get("/v1/user", getUser);
route.get("/v1/user/:user_id", getUserById);
route.get("/v1/bookByCategory", getBookByCategory);
route.get("/v1/CategoryBasedBook", getBookBasedOnCategory);
route.get("/v1/getquery", getUserBooksWithCategories);
route.get("/v1/getUserBookWithTitle", getUserBooksWithCategoriesAndTitle);

module.exports = route;
