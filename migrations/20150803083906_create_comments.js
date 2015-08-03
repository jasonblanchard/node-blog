var table = function(table) {
  table.increments().primary();
  table.text('body');
  table.timestamps();
  table.integer('post_id').references('posts.id');
}


exports.up = function(knex, Promise) {
  return knex.schema.createTable('comments', table);
};

exports.down = function(knex, Promise) {
  
};
