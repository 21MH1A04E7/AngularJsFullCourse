// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: "mysql2", // Specifies that we're using mysql as the database
    connection: {
      host: "localhost", //where our databse base is ruing
      user: "root",
      password: "MyNewPass",
      database: "college", // The name of the database to connect to
    },
    migrations: {
      directory: "./migrations",
    },
    seed: {
      directory: "./seeds",
    },
  },

  staging: {
    client: "mysql2",
    connection: {
      host: "localhost",
      database: "college",
      user: "root",
      password: "MyNewPass",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      directory: "./src/migrations",
      tableName: "knex_migrations",
    },
  },

  production: {
    client: "mysql2",
    connection: {
      database: "college1",
      user: "root",
      password: "MyNewPass",
      host: "localhost",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations", // The table used by Knex to track which migrations have been applied
    },
  },
};
