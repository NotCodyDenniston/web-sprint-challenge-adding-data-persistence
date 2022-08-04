

exports.seed = async function(knex) {
  await knex('resources').insert([
    {resource_name: 'money', resource_description: 'mr crabs motivation to live'},
    {resource_name: 'clothes'}
  ]);
};