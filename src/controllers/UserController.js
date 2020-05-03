const knex = require('../database');

module.exports = {
  async index(request, response) {
    const users = await knex('users');

    return response.json(users);
  },

  async store(request, response) {
    const { username } = request.body;

    await knex('users').insert({ username });

    return response.status(201).send();
  },

  async update(request, response) {
    const { id } = request.params;
    const { username } = request.body;

    await knex('users').update({ username }).where({
      id,
    });

    return response.send();
  },

  async delete(request, response) {
    const { id } = request.params;

    await knex('users').delete().where({
      id,
    });

    return response.status(204).send();
  },
};
