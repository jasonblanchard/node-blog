import bookshelf from '../../config/bookshelf';

export default bookshelf.Model.extend({
  tableName: 'posts',
  hasTimestamps: true
});
