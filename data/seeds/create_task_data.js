

exports.seed = async function(knex) {
  await knex('tasks').insert([
    {project_id: 1, task_description: 'sleep for 14 hours', task_notes: "Still wake up tired"},
    {project_id: 1, task_description: 'task 2', task_completed: true}
  ]);
};