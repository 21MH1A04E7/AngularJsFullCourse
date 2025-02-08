const knex = require("../config/kenx");

const getBookBasedOnCategory = async (req, res, next) => {
  try {
    const { serachCategory } = req.query;
    const response = await knex("category as c")
      .leftJoin("book as b", "b.category_id", "=", "c.category_id")
      .select("c.category_id", "c.category_name")
      .count("b.book_id as bookCount")
      .groupBy("c.category_id")
      .select(
        knex.raw(`
      GROUP_CONCAT(
        JSON_Object(
          'book_id', b.book_id
        )) as books`)
      );

    return res.status(200).json({
      message: "getting book based on category",
      data: response,
    });
  } catch (error) {
    console.log("internal server error", error);
  }
};

module.exports = { getBookBasedOnCategory };
