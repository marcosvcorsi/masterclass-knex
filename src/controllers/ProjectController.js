const knex = require('../database');

module.exports = {
  async index(request, response) {
    const { user_id, page = 1, limit = 5 } = request.query;

    const where = user_id ? { user_id } : {};

    const projects = await knex('projects')
      .limit(limit)
      .offset((page - 1) * limit)
      .where('projects.deleted_at', null)
      .where(where)
      .join('users', 'users.id', '=', 'projects.user_id')
      .where('users.deleted_at', null)
      .select('projects.*', 'users.username');

    const [count] = await knex('projects').count().where(where);

    response.header('X-Total-Count', count['count']);
    return response.json(projects);
  },

  async store(request, response) {
    const { title, user_id } = request.body;

    await knex('projects').insert({ title, user_id });

    return response.status(201).send();
  },

  async update(request, response) {
    const { id } = request.params;
    const { title } = request.body;

    await knex('projects').update({ title }).where({
      id,
    });

    return response.send();
  },

  async delete(request, response) {
    const { id } = request.params;

    await knex('projects').update('deleted_at', new Date()).where({
      id,
    });

    return response.status(204).send();
  },
};
