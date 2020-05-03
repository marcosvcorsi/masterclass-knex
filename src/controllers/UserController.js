const knex = require('../database');

module.exports = {
  async index(request, response) {
    const users = await knex('users');

    return response.json(users);
  },
};
