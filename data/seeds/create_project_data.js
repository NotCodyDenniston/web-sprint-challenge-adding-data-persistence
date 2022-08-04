

exports.seed = async function(knex) {
  await knex('projects').insert([
    {project_name: 'sprint challenge', project_completed: false, project_description: 'cry'},
    {project_name: 'build chad physique', project_completed: true}
  ]);
};