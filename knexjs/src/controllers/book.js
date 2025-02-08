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

module.exports = { getBookByCategory };
