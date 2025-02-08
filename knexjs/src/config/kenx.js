const knexfile = require("../../knexfile");
const { Model } = require("objection");
const Knex = require("knex");

const knex = Knex(knexfile.development); // Initialize Knex with the configuration from the knexfile
Model.knex(knex); //bind knex to objection.js

module.exports = knex;
