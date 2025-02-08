const knex = require("../config/kenx");
const getUser = async (req, res, next) => {
  try {
    const user = await knex("users").select("*");
    return res.status(200).json({
      message: "getting all the user",
      data: user,
    });
  } catch (error) {
    console.log("error", error);
  }
};

const getUserById = async (req, res, next) => {
  try {
    console.log(req.params);
    const { user_id } = req.params;
    const user = await knex("users").select("*").where("user_id", user_id);
    if (user.length === 0) {
      return res.status(200).json({
        message: "user not present with this id",
        data: [],
      });
    }
    return res.status(200).json({
      message: "getting all the user",
      data: user,
    });
  } catch (error) {
    console.log("error", error);
  }
};

const getUserBooksWithCategories = async (req, res, next) => {
  try {
    const response = await knex("users as u")
      .select("u.name", "b.title", "c.category_name")
      .innerJoin("borrow as br", "br.user_id", "=", "u.user_id")
      .innerJoin("book as b", "b.book_id", "=", "br.book_id")
      .innerJoin("category as c", "c.category_id", "=", "b.category_id");

    if (!response) {
      return res.status(200).json({
        message: "user not found",
        data: [],
      });
    }
    return res.status(200).json({
      message: "user with book",
      data: response,
    });
  } catch (error) {
    console.log("error", error);
  }
};
const getUserBooksWithCategoriesAndTitle = async (req, res, next) => {
  try {
    const response = await knex("users as u")
      .select(
        "u.name",
        knex.raw(`GROUP_CONCAT(DISTINCT c.category_name) as category`),
        knex.raw(`GROUP_CONCAT(b.title) as bookTitle`)
      )
      .count("u.user_id as countBook")
      .innerJoin("borrow as br", "br.user_id", "=", "u.user_id")
      .innerJoin("book as b", "b.book_id", "=", "br.book_id")
      .innerJoin("category as c", "c.category_id", "=", "b.category_id")
      .groupBy("u.user_id");

    if (!response) {
      return res.status(200).json({
        message: "user not found",
        data: [],
      });
    }
    return res.status(200).json({
      message: "user with book",
      data: response,
    });
  } catch (error) {
    console.log("error", error);
  }
};
module.exports = {
  getUserById,
  getUser,
  getUserBooksWithCategories,
  getUserBooksWithCategoriesAndTitle,
};
