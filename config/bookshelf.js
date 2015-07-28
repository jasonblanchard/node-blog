import knex from 'knex';
import bookshelf from 'bookshelf';
import dbConfig from '../knexfile';

var env = process.env.NODE_ENV || 'development';

var knexDb = knex(dbConfig[env]);
var bookshelfInstance = bookshelf(knexDb);

export default bookshelfInstance;
