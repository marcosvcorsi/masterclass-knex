// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: 'knex_test',
      user: 'postgres',
      password: 'docker',
    },
    migrations: {
      directory: `${__dirname}/src/database/migrations`,
    },
    seeds: {
      directory: `${__dirname}/src/database/seeds`,
    },
  },
};
