const express = require("express");
const knex = require("./config/kenx");
const router = require("./routes/router");
const app = express();

app.use("/api", router);

knex
  .raw("SELECT 1")
  .then(() => {
    console.log("Knex is connected to the database");
    app.listen(4000, () => {
      console.log("server started on prot no 4000");
    });
  })
  .catch((error) => {
    console.log("database connection is fail", error);
  });
