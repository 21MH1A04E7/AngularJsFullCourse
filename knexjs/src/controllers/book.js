const { query } = require("express");
const knex = require("../config/kenx");

const getBookByCategory = async (req, res, next) => {
  try {
    const booksByCategory = await knex("book as b")
      .join("category as c", "b.category_id", "=", "c.category_id")
      .select("*");

    if (booksByCategory.length === 0) {
      return res.status(200).json({
        message: "no book based on category",
        datat: [],
      });
    }
    const newData = booksByCategory.map((data) => {
      const { created_at, updated_at, ...newdata } = data;
      return newdata;
    });
    return res.status(200).json({
      message: "getting book based on category",
      datat: newData,
    });
  } catch (error) {
    console.log("internal server error", error);
  }
};
// "List all users who have borrowed books that belong to a specific category and have overdue items (i.e., their return date is past today's date). Include details such as:

// User's Name
// Email
// Book Title
// Author
// Category Name
// Borrow Date
// Return Date
// Status (borrowed/returned)"

const getBorrowedBooksByCategory = async (req, res, next) => {
  const categoryName = req.query.categoryName;
  try {
    const query = knex("borrow")
      .join("users", "borrow.user_id", "users.user_id")
      .join("book", "borrow.book_id", "book.book_id")
      .join("category", "book.category_id", "category.category_id")
      .select(
        "users.name as user_name",
        "users.email",
        "book.title as book_title",
        "book.author",
        "category.category_name",
        "borrow.borrow_date",
        "borrow.return_date",
        "borrow.status"
      )
      .where("borrow.status", "borrowed")
      .andWhere("borrow.return_date", "<", knex.fn.now());
    if (categoryName) {
      query.andWhere("category.category_name", "like", `%${categoryName}%`);
    }
    query
      .orderBy("borrow.borrow_date", "asc")
      .then((result) => {
        if (result.length === 0) {
          return res.status(200).json({
            message: "now data found",
            data: [],
          });
        }
        return res.status(200).json({
          message: "getting all the data",
          data: result,
        });
      })
      .catch((error) => {
        return res.status(404).json({
          data: [],
          error: error,
        });
      });
  } catch (err) {
    console.log("error whilt featching the borrowedBooks", err);
    return res.status(500).json({
      message: "internal server error",
      error: err,
    });
  }
};

module.exports = { getBookByCategory, getBorrowedBooksByCategory };
