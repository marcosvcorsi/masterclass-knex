exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(() => {
      // Inserts seed entries
      return knex('users').insert([
        { username: 'marcosvcorsi' },
        { username: 'maykbrito' },
        { username: 'diegosf' },
      ]);
    });
};
