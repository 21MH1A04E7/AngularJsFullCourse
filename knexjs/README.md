migartion => In Knex.js, migrations are used to manage and version control your database schema changes over time. Migrations allow you to write SQL schema changes (like creating tables, adding columns, etc.) in a structured and reversible manner.

create the migarion
npx knex migrate:make migration_name
npx knex migrate:make migration_name --knexfile knexfile.js

run the migarion
npx knex migrate:latest

If you need to undo the last migration, you can use the rollback command
npx knex migrate:rollback

Check Migration History: The command shows you which migrations have been applied to the database so far, as recorded in the knex_migrations tabl

npx knex migrate:list

to create the seed
npx knex seed:make seed_file_name
