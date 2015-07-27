var table = function(table) {
  table.increments().primary();
  table.string('title');
  table.text('body');
  table.timestamps();
}

exports.up = function(knex, Promise) {
  return knex.schema.createTable('posts', table)
    .then(function() {
      console.log("Posts created");
    });
};

exports.down = function(knex, Promise) {
  
};
